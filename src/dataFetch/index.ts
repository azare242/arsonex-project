'use server'
import { CryptoDataList } from "@/types/dataTable";

export async function dataFetch (page: number): Promise<CryptoDataList | null> {


    const url = process.env.CoinGecko
    // const apiKey = process.env.CoinGeckoAPIKEY
    if (!url) {
        return null
    }

    const rawResult = await fetch(
        `${url}?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
        {
            method: "GET",
            // headers: {
            //     "x-cg-pro-apikey": apiKey
            // }
        }
    )

    if (!rawResult.ok) {
        const error = await rawResult.json()
        console.log(error)
        return null
    }

    const result = await rawResult.json()
    
    return result as CryptoDataList
}