"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UsersFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export function UsersFilter({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: UsersFilterProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="w-[48%] md:w-auto">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="z-[9999] w-[180px]" position="popper" sideOffset={4}>
          <SelectItem value="name-asc">Name (A-Z)</SelectItem>
          <SelectItem value="name-desc">Name (Z-A)</SelectItem>
          {/* <SelectItem value="id-asc">ID (Ascending)</SelectItem>
          <SelectItem value="id-desc">ID (Descending)</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
    </div>
  );
}
