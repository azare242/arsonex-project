'use client'
import { CryptoData } from "@/types/dataTable"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
export const CryptoColumns: ColumnDef<CryptoData>[] = [
    {
        accessorKey: "image",
        header: "",
        cell: ({ row }) => (
            <Image
                src={row.original.image}
                alt={row.original.name}
                width={35}
                height={35}
            />
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "symbol",
        header: "Symbol",
    },
    {
        accessorKey: "current_price",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(
                    column.getIsSorted() === "asc"
                )}
            >
              Price
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        // Enable sorting on current_price field
        enableSorting: true,
    },
    {
        accessorKey: "price_change_24h",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(
                    column.getIsSorted() === "asc"
                )}
            >
              24hPrice Change (%)
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        enableSorting: true,
    },
    {
        accessorKey: "market_cap",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(

                    column.getIsSorted() === "asc"

                )}
            >
              Market Cap ($)
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        enableSorting: true,
    },


]