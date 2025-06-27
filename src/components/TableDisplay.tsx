import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { FaUtensils } from 'react-icons/fa';
import DataTable from './DataTable.tsx';
interface TableDisplayProps {
    data: any[];
    fields: Array<{ label: string; key: string }>;
    endpoint: string;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    size: number;
    selectedRow: number | null;
    setSelectedRow: (row: number | null) => void;
    tableRef: React.RefObject<HTMLDivElement>;
    children?: React.ReactNode;
}

const TableDisplay: React.FC<TableDisplayProps> = ({
    data,
    fields,
    endpoint,
    currentPage,
    setCurrentPage,
    size,
    selectedRow,
    setSelectedRow,
    tableRef,
    children
}) => {
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
            <Flex ref={tableRef} alignItems="flex-start" gap={10}>
                <DataTable
                    endpoint={endpoint}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    size={size}
                    data={data}
                    fields={fields}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
                {children}
            </Flex>
        </Box>
    );
}
export default TableDisplay;