import { CryptoDataList } from "@/types/dataTable"
import { useEffect, useState } from "react"
import { fetchC } from "./mock"

export const useFetch = (page: number) => {


    const [data, setData] = useState<CryptoDataList | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        (async () => {
            const res = await fetchC(page)

            console.log(res)
            setData(res)
            setLoading(false)
            
        })
        ()
    }, [page])

    return {loading, data}
}