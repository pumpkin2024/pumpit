// app/components/auth/AuthButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { UserProfile } from "./userprofile";

interface AuthButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  ifmobile?: boolean;
}

export function AuthButton({ ifmobile, ...props }: AuthButtonProps) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return session?.user ? (
    <UserProfile ifmobile={ifmobile} {...props} />
  ) : ifmobile ? (
    <Button variant="ghost" className="w-full justify-start" onClick={() => signIn()} {...props}>
      Sign In
    </Button>
  ) : (
    <Button className="mx-2" onClick={() => signIn()} {...props}>
      Sign In
    </Button>
  );
}
