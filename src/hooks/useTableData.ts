import { useState } from "react";
import UsePaginatedQuery from "../services/UsePaginatedQuery.ts";

export const useTableData = (endpoint: string) => {
  const [currentPage, setCurrentPage] = useState(0);
  const size = 10;
  const { data, error, isLoading, refetch } = UsePaginatedQuery(
    endpoint,
    currentPage,
    size,
    "tables"
  );   

  return {
    data,
    error,
    isLoading,
    refetch,
    currentPage,
    setCurrentPage,
    size,
    content: data?.content || []
  }
};