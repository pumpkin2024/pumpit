import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

interface UserProfileProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  ifmobile?: boolean;
}

export function UserProfile({ ifmobile }: UserProfileProps) {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none w-full ">
        {ifmobile ? (
          <Button variant="ghost" className="flex items-center w-full justify-start text-left text-sm h-12 px-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src={session?.user?.image ?? undefined} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold ">
                {session?.user?.name}
              </span>
              <span className="truncate text-xs">{session?.user?.email}</span>
            </div>
          </Button>
        ) : (
          <Avatar className="mx-2">
            <AvatarImage src={session?.user?.image ?? undefined} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:w-80">
        <DropdownMenuLabel className="p-0 font-normal ">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left ">
            <Avatar className=" rounded-lg">
              <AvatarImage src={session?.user?.image ?? undefined} />
              <AvatarFallback className="rounded-lg">You</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-lg leading-tight">
              <span className="truncate font-semibold text-sm lg:text-lg">
                {session?.user?.name}
              </span>
              <span className="truncate text-xs lg:text-sm">{session?.user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-sm lg:text-base">
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-sm lg:text-base">
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm lg:text-base">
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="text-sm lg:text-base">
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm lg:text-base" onClick={() => signOut()}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
