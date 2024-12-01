'use server'
import data from './mock.json'



export const fetchC = async (page: number) => {
    // Define the number of items per page
    const itemsPerPage = 10;

    // Calculate the starting index of the page
    const startIndex = (page - 1) * itemsPerPage;

    // Get the slice of data for the current page
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    // Return the paginated data
    return paginatedData;
};