"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type SideNavigationItem = {
  href: string;
  title: string;
  icon?: React.ReactNode;
};

type SideNavigationProps = {
  items: SideNavigationItem[];
};

const SideNavigationItem = ({ item }: { item: SideNavigationItem }) => {
  const pathname = usePathname();

  const isActive = pathname === item.href;

  return (
    <Link
      className={`flex flex-row gap-2 items-center py-2 px-4 rounded-sm w-32 ${
        isActive ? "bg-blue-500 text-primary bg-opacity-10" : "text-slate-700"
      }`}
      href={item.href}
    >
      {item.icon ? item.icon : null}
      <span>{item.title}</span>
    </Link>
  );
};

const SideNavigation = ({ items }: SideNavigationProps) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <SideNavigationItem key={item.href} item={item} />
      ))}
    </div>
  );
};

export default SideNavigation;
