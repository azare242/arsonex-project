'use server'
import data from './mock.json'



export const fetchC = async (page: number, mc: string, search: string) => {

    console.log(mc)
    let market_cap_thrsh = (market_cap: number) => market_cap > 0
    switch (mc) {
        case "under_1B":
            market_cap_thrsh = (market_cap: number) => market_cap < 1_000_000_000;
            break;
        case "1B_to_10B":
            market_cap_thrsh = (market_cap: number) => market_cap >= 1_000_000_000 && market_cap <= 10_000_000_000;
            break;
        case "over_10B":
            market_cap_thrsh = (market_cap: number) => market_cap > 10_000_000_000;
            break;
        default:
            market_cap_thrsh = (market_cap: number) => market_cap > 0
            break;
        

    }
    let dataFiltered = data;
    if (mc !== "") {
        dataFiltered = dataFiltered.filter(item => market_cap_thrsh(item.market_cap))
    }
    if (search !== "") {
        dataFiltered = dataFiltered.filter(
            item => {
                if (item.name.toLowerCase().includes(search) || item.symbol.toLowerCase().includes(search)) {
                    return true
                }
                return false
            }
        )
    }
    // Define the number of items per page
    const itemsPerPage = 10;

    // Calculate the starting index of the page
    const startIndex = (page - 1) * itemsPerPage;

    // Get the slice of data for the current page
    const paginatedData = dataFiltered.slice(startIndex, startIndex + itemsPerPage);

    // Return the paginated data
    return paginatedData;
};