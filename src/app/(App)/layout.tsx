import React, { Suspense } from "react";
import CheckSyncId from "./CheckSyncId";
import NavBar from "@/components/NavBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <Suspense fallback={<></>}>
        <CheckSyncId />
      </Suspense>
      <div className="flex-grow h-0">{children}</div>
    </div>
  );
};

export default AppLayout;
