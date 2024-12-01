// import Filters from "@/components/Filters"
'use client'
import DataTablePage from "@/components/Pages/Main"
import dynamic from "next/dynamic"
import { useState } from "react"

const NoSSRFilters = dynamic(() => import('@/components/Filters'), { ssr: false })
const NoSSRSearch = dynamic(() => import("@/components/Search"), {ssr: false})
const MainPage = () => {

  const [filter, setFilter] = useState<string>("All")
  const [search, setSearch] = useState<string>("")
  return (
    <div className="flex flex-col">

      <div className="ml-2 mr-2 flex flex-row items-end justify-end gap-4">
      <NoSSRSearch onChange={setSearch} searched={search}/>
      <NoSSRFilters onChange={setFilter} currentSelect={filter}/>
      </div>
      <DataTablePage />

    </div>
  )
}

export default MainPage