"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu";
import { SearchIcon, FilterIcon, ListIcon, CalendarIcon, CheckSquareIcon, TypeIcon } from "lucide-react";

type FilterKey = 'type' | 'needApproval' | 'notStarted' | 'notEnded' | 'ongoing' | 'finished';
interface ContestsFilterProps {
  onFilterChange: (filters: any) => void;
}

const ContestsFilter: React.FC<ContestsFilterProps> = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: false,
    needApproval: false,
    notStarted: false,
    notEnded: false,
    ongoing: false,
    finished: false
  });
  const [sortOption, setSortOption] = useState('newest');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({ searchQuery: e.target.value, filters, sortOption });
  };

  const handleFilterChange = (filterName: FilterKey) => {
    setFilters(prev => {
      const newFilters = { ...prev, [filterName]: !prev[filterName] };
      onFilterChange({ searchQuery, filters: newFilters, sortOption });
      return newFilters;
    });
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    onFilterChange({ searchQuery, filters, sortOption: value });
  };

  return (
    <div className="flex items-center justify-between pl-0 pb-0 rounded-lg sm:w-11/12 md:w-11/12 lg:w-2/3 xl:w-1/2 shadow-lg">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="pl-10 pr-12 py-2 h-12 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
          placeholder="Title, admin..."
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
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
          <DropdownMenuCheckboxItem checked={filters.needApproval} onClick={() => handleFilterChange('needApproval')}>
            <CheckSquareIcon className="w-4 h-4 mr-2" />
            Need Approval
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator/>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={filters.notStarted} onClick={() => handleFilterChange('notStarted')}>
            <CalendarIcon className="w-4 h-4 mr-2" />
            Yet to start
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={filters.ongoing} onClick={() => handleFilterChange('ongoing')}>
            <CalendarIcon className="w-4 h-4 mr-2" />
            Ongoing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={filters.finished} onClick={() => handleFilterChange('finished')}>
            <CalendarIcon className="w-4 h-4 mr-2" />
            Finished
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
          
          <DropdownMenuRadioGroup value={sortOption} onValueChange={handleSortChange}>
            <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="title-asc">Title: A to Z </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="title-desc" >Title: Z to A</DropdownMenuRadioItem>
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

export default ContestsFilter;
