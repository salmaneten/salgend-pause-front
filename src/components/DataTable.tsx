import React, { useState } from 'react'
import { Table,Thead,Tbody,Tr,Th,Td,TableContainer } from '@chakra-ui/react'
import Pagination from './Pagination.tsx';

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
    size: number;
    setSize: (size: number) => void;
}

const DataTable = <T,>({ data, fields, api_url, currentPage, setCurrentPage, size, setSize}: DataTableProps<T>) => {
  
  return (

<TableContainer flex='2' bgColor='dark5' borderRadius='12px'>
  <Table >   
    <Thead>
      <Tr>
          {fields.map((field, index) => (
            <Th key={index} textColor='light'>{field.label}</Th>
          ))}
      </Tr>
    </Thead>
    <Tbody>
        {data.map((item, index) => (          
          <Tr key={index}>
            {fields.map((field, fieldIndex) => (
              <Td key={fieldIndex} textColor='light'>{item[field.key]}</Td>
            ))}
          </Tr>
        ))}
    </Tbody>    
  </Table> 
   <Pagination api_url={api_url} currentPage={currentPage} setCurrentPage={setCurrentPage} size={size} setSize={setSize}/> 
</TableContainer>
  )
}


export default DataTable