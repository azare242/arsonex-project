export async function GET(request: Request) {
    const url = process.env.CoinGecko
    // const apiKey = process.env.CoinGeckoAPIKEY
    if (!url) {
        return new Response(JSON.stringify(null), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }

    const searchParams = new URL(request.url).searchParams;
    const page = parseInt(searchParams.get('page') || "1");

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
        return new Response(JSON.stringify(error), {
            status: rawResult.status,
            headers: { 'Content-Type': 'application/json' } // Add header here as well
        })
    }

    const result = await rawResult.json()
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' } // Add the Content-Type header
    })
}
