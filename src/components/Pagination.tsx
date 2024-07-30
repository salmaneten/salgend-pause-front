import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import UsePaginatedQuery from "../services/UsePaginatedQuery.ts";

interface PageInfo {
  totalElements: number;
  totalPages: number;
}

interface PaginationProps {
  api_url: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  size: number;
}
const Pagination = ({
  api_url,
  currentPage,
  setCurrentPage,
  size,
}: PaginationProps) => {
  const { data } = UsePaginatedQuery(api_url, currentPage, size, "pages");

  const totalPages = data?.totalPages || 0;

  const pages = [...Array.from({ length: totalPages }, (_, i) => i + 1)];

  return (
    <Flex gap={3} justifyContent="center" p={4}>
      {pages.map((page, index) => {
        return (
          <Button
            size="xs"
            bgColor="yellow"
            _hover={{
              bgColor: "vividYellow",
            }}
            key={index}
            onClick={() => {
              setCurrentPage(page - 1);
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
