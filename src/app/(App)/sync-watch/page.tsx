import React from "react";

const SyncWatchPage = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Sync-Watch</span>
          <span className="text-slate-500">
            Schau Videos mit anderen zusammen
          </span>
        </div>
        <div className="flex flex-row gap-8">
          <div className="border w-64 h-32"></div>
          <div className="border w-64 h-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SyncWatchPage;
