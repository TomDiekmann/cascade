"use client";

import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const NavBar = () => {
  return (
    <div className="h-16 border-b px-8 py-2 flex-none">
      <div className="flex flex-row items-center gap-8 max-w-7xl mx-auto">
        <Link href="/">
          <span className="text-primary text-xl font-semibold">cascade</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kurse
                </NavigationMenuLink>
              </Link>
              <Link href="/sync-watch" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sync-Watch
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="relative flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Nach Videos oder Kursen suchen"
            className="w-full bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
