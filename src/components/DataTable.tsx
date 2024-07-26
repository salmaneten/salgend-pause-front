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

<TableContainer flex='2' bgColor='dark5' borderRadius='12px'>
  <Table >
   
    <Thead>
      <Tr>
          {fields.map((field, index) => (
            <Th key={index} textColor='light'>{field.label} </Th>
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
</TableContainer>
  )
}


export default DataTable