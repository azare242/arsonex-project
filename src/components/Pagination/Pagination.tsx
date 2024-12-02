'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useSearchParams } from 'next/navigation';

interface Props {
  totalPages: number;
  pageLink?: string;
}

export function PaginationC({ totalPages }: Props) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') ?? '1') || 1;

  const buildPageLink = (page: number) => {
    const market_cap = searchParams.get('market_cap');
    const search = searchParams.get('search');
    const qry = [];
    if (market_cap) qry.push('market_cap=' + market_cap);
    if (search) qry.push('search=' + search);
    qry.push('page=' + page);
    return `?${qry.join('&')}`;
  };

  return (
    <Pagination className="flex justify-center space-x-2 p-4">
      <PaginationContent className="flex items-center">
        <PaginationItem className="flex-shrink-0">
          <PaginationPrevious
            href={currentPage > 1 ? buildPageLink(currentPage - 1) : undefined}
            className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          />
        </PaginationItem>

        <PaginationItem className="hidden md:block">
          <PaginationLink
            href={buildPageLink(currentPage)}
            className="px-2 py-1 border rounded bg-gray-300 dark:bg-gray-600"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem className="flex-shrink-0">
          <PaginationNext
            href={
              currentPage < totalPages ? buildPageLink(currentPage + 1) : undefined
            }
            className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
