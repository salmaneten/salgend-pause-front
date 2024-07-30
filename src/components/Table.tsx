import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Box, Flex, Heading, Spinner} from "@chakra-ui/react";
import { fetchDataService } from "../services/FetchDataService.ts";
import DataTable from "./DataTable.tsx";
import { FaUtensils } from "react-icons/fa";
import TableForm from "./TableForm.tsx";
import Pagination from "./Pagination.tsx";



// Define the API response interface
interface ApiResponse {
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



const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const API_URL="http://localhost:8080/tables"
  
  const {data, error, isLoading, refetch} = useQuery<ApiResponse>({
    queryKey: ["tables", currentPage , size],
    queryFn: () => fetchDataService(`${API_URL}?page=${currentPage}&size=${size}`),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  

  const fields = [
    { label: "Number", key: "number" },
    { label: "Number of Guests", key: "numberOfGuests" },
  ];

  if (isLoading) return <Spinner />;
  if (error) return <div>Error fetching data: {error.message}</div>;
  const content = data?.content || [];
  return (
    <Box width='100%' p={4}>
      <Heading textColor='light' display="flex" gap="1" alignItems="center" mb={4}>
        Tables
        <FaUtensils />
      </Heading>      
      <Flex alignItems='flex-start' gap={10}>
        <DataTable api_url={API_URL} currentPage={currentPage} setCurrentPage={setCurrentPage} size={size} setSize={setSize} data={content || []} fields={fields}/>        
        <TableForm refetch={refetch} />       
      </Flex>         
    </Box>
    
  );
};

export default Table;
