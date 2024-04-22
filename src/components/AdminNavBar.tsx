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
import { signOut } from "next-auth/react";

const NavBar = () => {
  return (
    <div className="h-16 border-b px-8 py-2">
      <div className="flex flex-row items-center gap-8 max-w-7xl mx-auto">
        <Link href="/admin">
          <span className="text-primary text-xl font-semibold">
            cascade / Admin
          </span>
        </Link>
        <NavigationMenu className="flex-grow">
          <NavigationMenuList className="w-full">
            <NavigationMenuItem className="w-full">
              <Link href="/admin/courses" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kurse
                </NavigationMenuLink>
              </Link>
              <Link href="/admin/backups" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sicherung
                </NavigationMenuLink>
              </Link>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() + " ml-auto cursor-pointer"
                }
                onClick={() => {
                  signOut({
                    callbackUrl: "/",
                  });
                }}
              >
                Abmelden
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
