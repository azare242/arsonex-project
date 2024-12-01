/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { Input } from '../ui/input'

const Search = ({onChange, searched}: any) => {


  return (
    <Input value={searched} placeholder='Search By Name Or Symbol...' onChange={(e)=>onChange(e.target.value)}/>
  )
}

export default Search