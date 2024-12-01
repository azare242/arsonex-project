'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FilterIcon } from 'lucide-react'

const Filters = () => {
  return (
    <Button className='w-[100px] ml-auto' variant={"default"}>Filters <FilterIcon/></Button>
  )
}

export default Filters