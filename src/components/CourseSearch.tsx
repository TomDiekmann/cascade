import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const CourseSearch = () => {
  const [search, setSearch] = React.useState("");

  return (
    <Popover modal>
      <PopoverTrigger>
        <div className="relative flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Nach Kursen suchen"
            className="w-full bg-background pl-8 md:w-[200px] lg:w-[336px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default CourseSearch;
