import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Box, Flex, Heading, Spinner} from "@chakra-ui/react";
import { fetchDataService } from "../services/FetchDataService.ts";
import DataTable from "./DataTable.tsx";
import { FaUtensils } from "react-icons/fa";
import TableForm from "./TableForm.tsx";

interface Table {  
  tableNumber: number;
  numberOfGuests: number;
}
const api_url = "http://localhost:8080/tables";

const Table = () => {
  const { data, error, isLoading, refetch} = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: () => fetchDataService(api_url),
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

  return (
    <Box width='100%' p={4}>
      <Heading textColor='light' display="flex" gap="1" alignItems="center" mb={4}>
        Tables
        <FaUtensils />
      </Heading>      
      <Flex alignItems='flex-start' gap={10}>
        <DataTable data={data || []} fields={fields} />
        <TableForm refetch={refetch} />
      </Flex>
    </Box>
  );
};

export default Table;
