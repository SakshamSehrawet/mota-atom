import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu";
import { SearchIcon, FilterIcon, ListIcon, UserIcon, CalendarIcon, CheckSquareIcon, TypeIcon } from "lucide-react";

const SearchFilterSortBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-lg border-b border-opacity-30 shadow-xl w-full max-w-2xl mx-auto">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="pl-10 pr-12 py-2 h-12 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
          placeholder="Search..."
          type="search"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-2" size="icon" variant="ghost">
            <FilterIcon className="w-5 h-5" />
            <span className="sr-only">Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <UserIcon className="w-4 h-4 mr-2" />
            Admin
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <TypeIcon className="w-4 h-4 mr-2" />
            Type
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <CheckSquareIcon className="w-4 h-4 mr-2" />
            Need Approval
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <CalendarIcon className="w-4 h-4 mr-2" />
            Start Date
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <CalendarIcon className="w-4 h-4 mr-2" />
            End Date
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-2" size="icon" variant="ghost">
            <ListIcon className="w-5 h-5" />
            <span className="sr-only">Sort</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="newest">
            <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="title-asc">Title: A to Z</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="title-desc">Title: Z to A</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="start-date-asc">Start Date: Earliest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="start-date-desc">Start Date: Latest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="end-date-asc">End Date: Earliest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="end-date-desc">End Date: Latest</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchFilterSortBar;
