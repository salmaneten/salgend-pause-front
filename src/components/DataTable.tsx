import React, { useRef } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import Pagination from "./Pagination.tsx";
import {
  BsFillTrash3Fill,  
} from "react-icons/bs";
import AlerteDeleteTable from "../alerts/AlerteDeleteTable.tsx";

interface Field {
  label: string;
  key: string;
}

interface DataTableProps<T> {
  data: T[];
  fields: Field[];
  endpoint: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedRow: number | null;
  setSelectedRow: (row: number | null) => void;
  size: number;
}


const DataTable = <T,>({
  data,
  fields,
  endpoint,
  currentPage,
  setCurrentPage,
  selectedRow,
  setSelectedRow,
  size,
}: DataTableProps<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
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
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr
              key={index}
              cursor="pointer"
              onClick={() => setSelectedRow(index)}
              bg={selectedRow === index ? "yellow" : "dark5"}
              textColor={selectedRow === index ? "dark5" : "light"}
              _hover={{ bg: "yellow", textColor: "dark5" }}
            >
              {fields.map((field, fieldIndex) => (
                <Td key={fieldIndex}>{item[field.key]}</Td>
              ))}
              <Td>
                <BsFillTrash3Fill onClick={onOpen} />
                <AlerteDeleteTable isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination
        endpoint={endpoint}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        size={size}
      />
    </TableContainer>
  );
};

export default DataTable;
