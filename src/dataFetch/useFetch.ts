import { useQuery } from '@tanstack/react-query';
import { fetchC } from './mock';
import { CryptoDataList } from '@/types/dataTable';

export const useFetch = (page: number, mc: string, search: string) => {
  const { data, isLoading, error } = useQuery<CryptoDataList>({
    queryKey: ['cryptoData', page, mc, search],
    queryFn: async () => {
      const response = await fetchC(page, mc, search);
      return response;
    },
    // keepPreviousData: true,
  });

  return { loading: isLoading, data, error };
};
