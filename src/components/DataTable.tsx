import React from 'react'
import { Table,Thead,Tbody,Tr,Th,Td,TableContainer } from '@chakra-ui/react'

interface Field {
    label: string;
    key: string;
}

interface DataTableProps<T> {
    data: T[];
    fields: Field[];
}

const DataTable = <T,>({ data, fields }: DataTableProps<T>) => {
  return (

<TableContainer>
  <Table variant='simple'>
   
    <Thead>
      <Tr>
          {fields.map((field, index) => (
            <Th key={index}>{field.label}</Th>
          ))}
      </Tr>
    </Thead>
    <Tbody>
        {data.map((item, index) => (          
          <Tr key={index}>
            {fields.map((field, fieldIndex) => (
              <Td key={fieldIndex}>{item[field.key]}</Td>
            ))}
          </Tr>
        ))}
    </Tbody>    
  </Table>
</TableContainer>
  )
}


export default DataTable