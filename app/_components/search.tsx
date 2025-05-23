import React from 'react'
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchComponent = () => {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-9"
      />
    </div>
  )
}

export default SearchComponent
