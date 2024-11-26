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


export function PaginationC({ totalPages, pageLink }: Props) {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') ?? "1") || 1;

    const buildPageLink = (page: number) => {
        if (pageLink) {
            return `${pageLink}?page=${page}`;
        } else {
            const params = new URLSearchParams(searchParams);
            params.set('page', `${page}`);
            return `?${params.toString()}`;
        }
    };

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, startPage + 4);
        } else {
            startPage = Math.max(1, endPage - 4);
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

