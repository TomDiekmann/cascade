import React from "react";
import prisma from "@/lib/prismadb";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";

const CourseDetailsPage = async ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      modules: {
        include: {
          videos: true,
        },
      },
    },
  });

  if (!course) {
    return notFound();
  } else
    return (
      <div className="flex flex-col">
        <div className="bg-[#F3F6FC] w-full h-96 p-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col gap-2">
            <span className="text-3xl font-semibold mt-4">{course.title}</span>
            <span className="text-slate-500">{course.description}</span>
            <Button className="w-max mt-4" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Kurs starten
            </Button>
          </div>
          <div
            className="absolute bottom-0 bg-white shadow w-full max-w-7xl p-4
		 	transform -translate-x-1/2 
				-translate-y-[-50%] 
			left-1/2 rounded-lg flex flex-row gap-4 items-center 
		  "
          >
            Test
          </div>
        </div>
        <div className="p-8 ">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 mt-8">
            {course.modules.map((module) => (
              <div className="flex flex-col gap-4" key={module.id}>
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold">
                      {module.title}
                    </span>

                    <div className="flex flex-row gap-2 items-center">
                      {module.description && (
                        <>
                          <span className="text-slate-500">
                            {module.description}
                          </span>
                          <div className="h-1 w-1 bg-slate-500 rounded-full" />
                        </>
                      )}
                      <span className="text-slate-500">
                        {module.videos.length} Videos
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-row gap-2">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {module.videos.map((video) => (
                    <div
                      className="border p-4 flex flex-col gap-2"
                      key={video.id}
                    >
                      <div className="aspect-video bg-gray-200"></div>
                      <Link
                        className="text-lg font-semibold"
                        href={`/video/${video.id}`}
                      >
                        {video.title}
                      </Link>
                      <span className="text-slate-500">
                        {video.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default CourseDetailsPage;
