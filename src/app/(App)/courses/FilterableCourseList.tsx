"use client";

import { Course } from "@prisma/client";
import React from "react";
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
import Link from "next/link";

type FilterableCourseListProps = {
  courses: Course[];
};

const FilterableCourseList = ({ courses }: FilterableCourseListProps) => {
  const [sortedBy, setSortedBy] = React.useState("alphabetic");

  const sortedCourses = courses.sort((a, b) => {
    if (sortedBy === "alphabetic") {
      return a.title.localeCompare(b.title);
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
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
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex-grow h-full flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center ">
          <Select value={sortedBy} onValueChange={(e) => setSortedBy(e)}>
            <SelectTrigger className="w-48">
              <SelectValue className="" />
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
            <span className="text-slate-500 text-sm">
              {courses.length} Kurse
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {sortedCourses.map((course) => (
            <div
              className="border w-full p-4 h-64 flex flex-row gap-4"
              key={course.id}
            >
              <div className="h-32 aspect-video bg-gray-200"></div>
              <div className="flex flex-col gap-2">
                <Link
                  className="text-lg font-semibold hover:text-primary"
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
  );
};

export default FilterableCourseList;
