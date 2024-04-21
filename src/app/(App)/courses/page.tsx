export const dynamic = "force-dynamic";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, LayoutList } from "lucide-react";
import React from "react";
import prisma from "@/lib/prismadb";
import Link from "next/link";

const CoursesPage = async () => {
  const courses = await prisma.course.findMany();

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Kurse</span>
          <span className="text-slate-500">Hier findest du alle Kurse</span>
        </div>
        <div className="flex flex-row gap-8">
          <div className="border w-64 flex-none h-min flex flex-col sticky top-0">
            <div className="p-2">
              <span className="text-lg font-semibold">Filter</span>
            </div>
            <Separator />
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-2">Studiengang</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="p-2">Dozent</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="p-2">Kursart</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-grow h-full flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center ">
              <Select defaultValue="alphabetic">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort" className="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alphabetic">Alphabetisch</SelectItem>
                  <SelectItem value="newest">Neuste</SelectItem>
                </SelectContent>
              </Select>
              <ToggleGroup variant="outline" type="single" defaultValue="list">
                <ToggleGroupItem value="list" aria-label="Toggle bold">
                  <LayoutList className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="grid" aria-label="Toggle italic">
                  <LayoutGrid className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="ml-auto">
                <span className="text-slate-500 text-sm">230 Kurse</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {courses.map((course) => (
                <div
                  className="border w-full p-4 h-64 flex flex-row gap-4"
                  key={course.id}
                >
                  <div className="h-32 aspect-video bg-gray-200"></div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="text-lg font-semibold"
                      href={`/courses/${course.id}`}
                    >
                      {course.title}
                    </Link>
                    <div className="flex flex-row gap-2">
                      <span className="text-sm">Dozent</span>
                      <span className="text-sm">Datum</span>
                    </div>
                    <span className="text-slate-500">Beschreibung</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
