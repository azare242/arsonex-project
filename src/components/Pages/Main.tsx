'use client'
import { useFetch } from '@/dataFetch/useFetch'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { CryptoColumns } from '../CryptoTable/columns'
import { DataTable } from '../CryptoTable'
import { PaginationC } from '../Pagination/Pagination'
import OptionsLoading from '../Loading/OptionsLoading'
import PaginationLoading from '../Loading/PaginationLoading'
import TableLoading from '../Loading/TableLoading'

const DataTablePage = () => {
    const query = useSearchParams()
    const market_cap = query.get("market_cap")
    const search = query.get("search")
    const { loading, data } = useFetch(parseInt(query.get("page") ?? "1"), market_cap ?? "" , search ?? "")
    
    if (loading) {
        return (
            <>
                <OptionsLoading />
                <TableLoading />
                <PaginationLoading /></>
        )
    }
    return (
        <div className='flex flex-col  px-4 my-2 w-full'>
            <DataTable columns={CryptoColumns} data={data ?? []}/>
            <section className=''>
            <PaginationC totalPages={10} />
            </section>
        </div>
    )
}

export default DataTablePage