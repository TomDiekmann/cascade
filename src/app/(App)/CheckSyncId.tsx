"use client";

import React, { use, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
const CheckSyncId = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const rcsStatus = searchParams.get("rcsStatus");
  const rcsSyncId = searchParams.get("rcsSyncId");

  useEffect(() => {
    if (rcsStatus === "enabled" && rcsSyncId) {
      // save rcsSyncId in local storage
      localStorage.setItem("rcsSyncId", rcsSyncId);
      //remove the search params
      router.push(pathname);
    } else if (rcsStatus === "disabled") {
      // remove rcsSyncId from local storage
      localStorage.removeItem("rcsSyncId");
      router.push(pathname);
    }
  }, [rcsStatus, rcsSyncId]);

  return <></>;
};

export default CheckSyncId;
