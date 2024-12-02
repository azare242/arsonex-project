/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Search as SearchIcon, X as ClearIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const Search = ({ onChange, searched }: any) => {

  const push = (link: string) => {window.location.assign(link)}
  const query = useSearchParams()

  const handleSearch = () => {
    // console.log(searched); // For now, just log the searched value
    const qry = []
    const page = query.get("page")
    if (page) {
      qry.push("page="+page)
    }
    const market_cap = query.get("market_cap")
    if (market_cap) {
      qry.push("market_cap="+market_cap)
    }
    if (searched !== "") qry.push(`search=${searched}`)

    push(`/?${qry.join("&")}`)


  };

  const handleClear = () => {
    onChange(''); // Clear the search input
    const qry = []
    const page = query.get("page")
    if (page) {
      qry.push("page="+page)
    }
    const market_cap = query.get("market_cap")
    if (market_cap) {
      qry.push("market_cap="+market_cap)
    }
    push(`/?${qry.join("&")}`)

  };

  return (
    <div className="relative">
      <Input
        value={searched}
        placeholder="Search By Name Or Symbol..."
        onChange={(e) => onChange(e.target.value)}
        className="pl-10" // Add padding to the left for the icon
      />
      {/* Search Icon */}
      <button
        onClick={handleSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        aria-label="Search"
      >
        <SearchIcon size={18} />
      </button>
      {/* Clear Icon */}
      {searched && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          aria-label="Clear"
        >
          <ClearIcon size={18} />
        </button>
      )}
    </div>
  );
}

export default Search;
