import React from "react";
import { useTableData } from "../hooks/useTableData.ts";
import { Spinner } from '@chakra-ui/react';
import { useTableSelection } from "../hooks/useTableSelection.ts";
import TableDisplay from './TableDisplay.tsx';
import TableFormManager from './TableFormManager.tsx';


const Table = () => {
  const {
    error,
    isLoading,
    refetch,
    currentPage,
    setCurrentPage,
    size,
    content,
  } = useTableData("tables");

  const {
    selectedRow,
    setSelectedRow,
    tableRef
  } = useTableSelection();

  // Early returns for loading/error states
  if (isLoading) return <Spinner />;
  if (error) return <div>Error fetching data: {error.message}</div>;

  const fields = [
    { label: "Number", key: "number" },
    { label: "Number of Guests", key: "numberOfGuests" },
  ];

  return (
    <TableDisplay
      data={content}
      fields={fields}
      endpoint="tables"
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      size={size}
      selectedRow={selectedRow}
      setSelectedRow={setSelectedRow}
      tableRef={tableRef}
    >
      <TableFormManager
        selectedRow={selectedRow}
        content={content}
        refetch={refetch}
      />
    </TableDisplay>
  );
};

export default Table;
