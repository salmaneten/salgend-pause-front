import { useQuery } from '@tanstack/react-query';
import { fetchDataService } from './FetchDataService.ts';
// Define the API response interface
interface InfoPage {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Table[];
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    last: boolean;
    pageable: {
        pageNumber: number;
        pageSize: number;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        offset: number;
        paged: boolean;
        unpaged: boolean;
    };
    empty: boolean;
}
interface Table {  
  tableNumber: number;
  numberOfGuests: number;
}

 const UsePaginatedQuery = (
    api_url,
    currentPage: number,
    size: number,
    queryKeyPrefix: string = "data"
) => {
    return useQuery<InfoPage>({
    queryKey:[queryKeyPrefix, currentPage, size],
    queryFn: () => fetchDataService(`${api_url}?page=${currentPage}&size=${size}`),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
export default UsePaginatedQuery;