// app/(actions)/authActions.ts — a server file
"use server"; // <— This file is entirely a Server Module

import { signIn,signOut } from "@/auth";

export async function signInAction(provider?: string) {
  await signIn(provider);
}

export async function signOutAction() {
    await signOut();
  }
  