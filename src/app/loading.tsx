import OptionsLoading from '@/components/Loading/OptionsLoading'
import PaginationLoading from '@/components/Loading/PaginationLoading'
import TableLoading from '@/components/Loading/TableLoading'
import React from 'react'

const Loading = () => {
  return (
    <>
    <OptionsLoading/>
    <TableLoading/>
    <PaginationLoading/>
    </>
  )
}

export default Loading