export const dynamic = "force-dynamic";

import React from "react";
import prisma from "@/lib/prismadb";
import FilterableCourseList from "./FilterableCourseList";

const CoursesPage = async () => {
  const courses = await prisma.course.findMany();

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Kurse</span>
          <span className="text-slate-500">Hier findest du alle Kurse</span>
        </div>
        <FilterableCourseList courses={courses} />
      </div>
    </div>
  );
};

export default CoursesPage;
