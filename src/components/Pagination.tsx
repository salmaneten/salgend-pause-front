import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import UsePaginatedQuery from "../services/UsePaginatedQuery.ts";

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
            bgColor={page!==currentPage+1? "yellow": "vividYellow"}
            _hover={{
              bgColor: page!==currentPage+1? "vividYellow": "yellow",
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
