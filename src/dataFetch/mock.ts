'use server'
import data from './mock.json'



export const fetchC = async (page: number, mc: string, search: string) => {

    let dataFiltered = data;
    if (mc !== "") {
        dataFiltered = dataFiltered.filter(item => item.market_cap > 1_000_000_000)
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