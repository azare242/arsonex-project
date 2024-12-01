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
    const { loading, data } = useFetch(parseInt(query.get("page") ?? "1"))
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
            <DataTable columns={CryptoColumns} data={data ?? []} />
            <PaginationC totalPages={10} pageLink='/' />
        </div>
    )
}

export default DataTablePage