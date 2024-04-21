"use client";

import { authAsUser } from "@/lib/auth";
import useAuthToken from "@/lib/useAuthToken";
import React, { use, useEffect } from "react";

const SyncedVideoPlayer = ({
  videoId,
  videoUrl,
  syncId,
}: {
  videoUrl: string;
  videoId: string;
  syncId: string;
}) => {
  const token = useAuthToken(authAsUser);

  useEffect(() => {
    if (token) {
      fetch(`https://overtevr.cs.upb.de/api/screen/${syncId}/content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: `{"content":{"paused":true,"startPosition":0,"type":"controlled-video","url":"${videoUrl}"}}`,
      });
    }
  }, [token]);

  return (
    <div className="bg-white absolute w-screen h-screen flex flex-col gap-2 items-center justify-center top-0 left-0">
      <span className="text-2xl">Wiedergabe wird synchronisiert...</span>
    </div>
  );
};

export default SyncedVideoPlayer;
