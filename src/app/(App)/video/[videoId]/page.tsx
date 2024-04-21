import React, { Suspense } from "react";
import prisma from "@/lib/prismadb";
import VideoPlayer from "./VideoPlayer";
import { notFound } from "next/navigation";

const VideoDetailsPage = async ({
  params,
}: {
  params: { videoId: string };
}) => {
  const video = await prisma.video.findUnique({
    where: {
      id: params.videoId,
    },
  });

  if (!video) {
    return notFound();
  } else
    return (
      <Suspense fallback={<></>}>
        <VideoPlayer videoId={video.id} videoUrl={video.url} />
      </Suspense>
    );
};

export default VideoDetailsPage;
