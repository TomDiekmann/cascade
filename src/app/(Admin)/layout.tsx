import AdminNavBar from "@/components/AdminNavBar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <AdminNavBar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default AdminLayout;
