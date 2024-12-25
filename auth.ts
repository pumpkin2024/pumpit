import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db } from "./drizzle/db";
import { accounts, users } from "./drizzle/schema";
import { eq } from "drizzle-orm";
import type { AdapterAccountType } from "next-auth/adapters";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) {
        return false;
      }

      try {
        // Check if user exists
        const existingUser = await db
          .select()
          .from(users)
          .where(eq(users.email, user.email))
          .execute();

        if (existingUser.length === 0) {
          // Create new user if doesn't exist
          const [newUser] = await db
            .insert(users)
            .values({
              id: crypto.randomUUID(),
              name: user.name,
              email: user.email,
              image: user.image,
            })
            .returning();

          // Create account link
          if (account) {
            await db.insert(accounts).values([
              {
                userId: newUser.id,
                type: account.type as AdapterAccountType,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                refresh_token: account.refresh_token ?? null,
                access_token: account.access_token ?? null,
                expires_at: account.expires_at ?? null,
                token_type: account.token_type ?? null,
                scope: account.scope ?? null,
                id_token: account.id_token ?? null,
                session_state: (account.session_state as string | null) ?? null,
              },
            ]);
          }
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
});
