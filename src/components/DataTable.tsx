import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Pagination from "./Pagination.tsx";

interface Field {
  label: string;
  key: string;
}

interface DataTableProps<T> {
  data: T[];
  fields: Field[];
  api_url: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedRow: number | null;
  setSelectedRow: (row: number | null) => void;
  size: number;
}

const DataTable = <T,>({
  data,
  fields,
  api_url,
  currentPage,
  setCurrentPage,
  selectedRow,
  setSelectedRow,
  size,
}: DataTableProps<T>) => {
  return (
    <TableContainer flex="2" bgColor="dark5" borderRadius="12px">
      <Table>
        <Thead>
          <Tr>
            {fields.map((field, index) => (
              <Th key={index} textColor="light">
                {field.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}
                cursor="pointer"
                onClick={() => setSelectedRow(index)}
                bg={selectedRow === index ? "yellow" : "dark5"}
                textColor={selectedRow === index ? "dark5" : "light"}          
                _hover={{ bg: "yellow", textColor: "dark5" }}>
              {fields.map((field, fieldIndex) => (
                <Td key={fieldIndex} >
                  {item[field.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination
        api_url={api_url}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        size={size}
      />
    </TableContainer>
  );
};

export default DataTable;
