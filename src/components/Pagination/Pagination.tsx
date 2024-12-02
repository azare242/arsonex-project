'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from 'next/navigation'

interface Props {
    totalPages: number,
    pageLink?: string;
}


export function PaginationC({ totalPages }: Props) {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') ?? "1") || 1;

    const buildPageLink = (page: number) => {
        const market_cap = searchParams.get("market_cap")
        const search = searchParams.get("search")
        const qry = []
        if (market_cap) qry.push("market_cap="+market_cap)
        if (search) qry.push("search="+search)
        qry.push("page="+page)
        return `?${qry.join("&")}`
    };

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, startPage + 2);
        } else {
            startPage = Math.max(1, endPage - 2);
        }
    }


    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={currentPage > 1 ? buildPageLink(currentPage - 1) : undefined} />
                </PaginationItem>

                {startPage > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationLink href={buildPageLink(1)}>1</PaginationLink>
                        </PaginationItem>
                        {startPage > 2 && <PaginationEllipsis />}
                    </>
                )}

                {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink href={buildPageLink(page)}>{page}</PaginationLink>
                    </PaginationItem>
                ))}

                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <PaginationEllipsis />}
                        <PaginationItem>
                            <PaginationLink href={buildPageLink(totalPages)}>{totalPages}</PaginationLink>
                        </PaginationItem>
                    </>
                )}

                <PaginationItem>
                    <PaginationNext href={currentPage < totalPages ? buildPageLink(currentPage + 1) : undefined} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

