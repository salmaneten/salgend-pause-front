import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Box, Heading, Spinner } from '@chakra-ui/react';
import { fetchTables } from '../services/TableService.ts';
import DataTable from './DataTable.tsx';
import { FaUtensils } from 'react-icons/fa';

interface Table {
  id: number;
  tableNumber: number;
  numberOfGuests: number;
}

 const Table = () => {
    const { data, error, isLoading } = useQuery<Table[]>({queryKey: ['tables'],queryFn: fetchTables,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,},
      
    );

    const fields = [
        { label: 'Number', key: 'number' },
        { label: 'Number of Guests', key: 'numberOfGuests' }
      ];

      if (isLoading) return <Spinner />;
      if (error) return <div>Error fetching data: {error.message}</div>;

  return (
     <Box p={4}>      
      <Heading display='flex' gap="1" alignItems='center' mb={4}>
         Tables
         <FaUtensils/>
      </Heading>
      <DataTable data={data || []} fields={fields} />
    </Box>
  )
}

export default Table