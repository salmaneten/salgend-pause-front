import React, { useState } from "react";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import DataTable from "./DataTable.tsx";
import { FaUtensils } from "react-icons/fa";
import TableForm from "./TableForm.tsx";
import UsePaginatedQuery from "../services/UsePaginatedQuery.ts";


const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const API_URL = "http://localhost:8080/tables";

  const { data, error, isLoading, refetch } = UsePaginatedQuery(API_URL, currentPage, size, "tables")

  const fields = [
    { label: "Number", key: "number" },
    { label: "Number of Guests", key: "numberOfGuests" },
  ];

  if (isLoading) return <Spinner />;
  if (error) return <div>Error fetching data: {error.message}</div>;
  const content = data?.content || [];
  return (
    <Box width="100%" p={4}>
      <Heading
        textColor="light"
        display="flex"
        gap="1"
        alignItems="center"
        mb={4}
      >
        Tables
        <FaUtensils />
      </Heading>
      <Flex alignItems="flex-start" gap={10}>
        <DataTable
          api_url={API_URL}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          size={size}
          data={content || []}
          fields={fields}
        />
        <TableForm refetch={refetch} />
      </Flex>
    </Box>
  );
};

export default Table;