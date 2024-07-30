import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchDataService } from "../services/FetchDataService.ts";
import { Box, Button, Flex } from "@chakra-ui/react";

interface PageInfo {
  totalElements: number;
  totalPages: number;
}

interface PaginationProps {
  api_url: string;
  pageSize: number;
}
// Transform the API response to only include the necessary properties
const transformResponse = (data: any): PageInfo => {
  console.log(data);
  return {
    totalPages: data.totalPages,
    totalElements: data.totalElements,
  };
};

const Pagination = <PaginationProps,>({ api_url, currentPage, setCurrentPage, size, setSize}) => {
  console.log(`${api_url}?page=${currentPage}&size=${size}`);
  const { data } = useQuery<PageInfo>({
    queryKey: ["pages", currentPage, size],
    queryFn: () => fetchDataService(`${api_url}?page=${currentPage}&size=${size}`)
  });

  const totalPages = data?.totalPages || 0;

  // Create an array of page numbers using Array.from
  const pages = [...Array.from({ length: totalPages }, (_, i) => i + 1)];

  return (
    <Flex gap={3} justifyContent="center" p={4}>
      {pages.map((page, index) => {
        return (
          <Button
           size='xs'
            bgColor="yellow"
            _hover={{
              bgColor: "vividYellow",
            }}
            key={index}
            onClick={() => {
              setCurrentPage(page-1);
            }}
          >
            {page}
          </Button>
        );
      })}
    </Flex>
  );
};

export default Pagination;
