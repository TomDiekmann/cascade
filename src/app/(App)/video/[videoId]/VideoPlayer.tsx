"use client";

import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { authAsUser } from "@/lib/auth";
import SyncedVideoPlayer from "./SyncedVideoPlayer";

type VideoPlayerProps = {
  videoUrl: string;
  videoId: string;
};

const VideoPlayer = ({ videoUrl, videoId }: VideoPlayerProps) => {
  const [syncStatus, setSyncStatus] = useState<undefined | "rcs" | "local">(
    undefined
  );
  const [syncId, setSyncId] = useState<string>("");

  const router = useRouter();

  const searchParams = useSearchParams();

  const time = searchParams.get("t");

  const VideoPlayerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    const rcsSyncId = localStorage.getItem("rcsSyncId");
    if (rcsSyncId && syncStatus != "rcs") {
      setSyncStatus("rcs");
      setSyncId(rcsSyncId);
    } else if (syncStatus != "local") {
      setSyncStatus("local");
      console.log("local");
    }
  }, []);

  return syncStatus ? (
    syncStatus == "local" ? (
      <div className="w-screen h-screen bg-black  group pointer-events-none absolute top-0 left-0">
        <div className="absolute top-0 right-0 p-4   bg-gray-600/75 pointer-events-auto z-10">
          <div
            className="flex-row text-white flex cursor-pointer"
            onClick={(e) => {
              router.back();
            }}
          >
            <X className="w-6 h-6" />
            <span>Wiedergabe beenden</span>
          </div>
        </div>
        <div className="pointer-events-auto w-screen h-screen">
          <ReactPlayer
            url={videoUrl}
            controls
            width={"100vw"}
            height={"100vh"}
            playing
            ref={VideoPlayerRef}
          />
        </div>
      </div>
    ) : (
      <SyncedVideoPlayer
        videoUrl={videoUrl}
        videoId={videoId}
        syncId={syncId}
      />
    )
  ) : (
    <></>
  );
};

export default VideoPlayer;
