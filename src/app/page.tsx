// import Filters from "@/components/Filters"
'use client'
import DataTablePage from "@/components/Pages/Main"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()

const NoSSRFilters = dynamic(() => import('@/components/Filters'), { ssr: false })
const NoSSRSearch = dynamic(() => import("@/components/Search"), { ssr: false })
const MainPage = () => {

  const query = useSearchParams()
  const [filter, setFilter] = useState<string>(query.get("market_cap") ?? "All")
  const [search, setSearch] = useState<string>(query.get("search") ?? "")
  return (
    <QueryClientProvider client={queryClient}>

      <div className="flex flex-col">

        <div className="ml-2 mr-2 flex flex-row items-end justify-end gap-4">
          <NoSSRSearch onChange={setSearch} searched={search} />
          <NoSSRFilters onChange={setFilter} currentSelect={filter} />
        </div>
        <DataTablePage />


      </div>
    </QueryClientProvider>

  )
}

export default MainPage