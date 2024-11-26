// import Image from "next/image";

// import OptionsLoading from "@/components/Loading/OptionsLoading";
// import PaginationLoading from "@/components/Loading/PaginationLoading";
// import TableLoading from "@/components/Loading/TableLoading";
import { PaginationC } from "@/components/Pagination/Pagination";
import { dataFetch } from "@/dataFetch";
// import { notFound } from "next/navigation";

async function fetchDataWithCache(page: number) {
  const cacheKey = `crypto-page-${page}`; // Create a unique key for each page

  // 1. Check if data is in the cache
  const cachedData = globalThis?.sessionStorage?.getItem(cacheKey);

  if (cachedData) {
      console.log("Cache hit!", page);
      return JSON.parse(cachedData);
  }

  // 2. If not in cache, fetch from the API
  console.log("Cache miss!", page);
  const data = await dataFetch(page);

  // 3. Store the fetched data in the cache
  if (data) {  // Only cache if data was successfully fetched
   globalThis?.sessionStorage?.setItem(cacheKey, JSON.stringify(data));
  }


  return data;
}

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  let page = parseInt(searchParams?.page as string) || 1; // Access page from searchParams

  if (isNaN(page)) {
    page = 1 // or redirect, if number is something weird
  }

  
  const res = await fetchDataWithCache(page); // Use page in your data fetching logic
  console.log(res)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
           {/* <OptionsLoading />
      <TableLoading />
      <PaginationLoading /> */}
      <PaginationC totalPages={10} pageLink={'/'} /> {/* Pass currentPage to Pagination */}

    </div>
  );
}
