import React from "react";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import Table from "./Table.tsx";

function Sidebar() {
  return (
    <>
      <Box
        w="250px"
        h="100%"
        bgColor="dark2"
        borderRightWidth="3px"
        borderRightColor="light"
      >
        <Box h="2xs"></Box>
        <UnorderedList styleType="none" textColor="light" spacing={2}>
          <ListItem display="flex" gap="1" alignItems="center" padding="5px">
            <BsFillHouseDoorFill />
            <Link to="/">
              <Text fontSize="xl">Home</Text>
            </Link>
          </ListItem>
          <ListItem display="flex" gap="1" alignItems="center" padding="5px">
            <FaUtensils />
            <Link to="/tables">
              <Text fontSize="xl">Tables</Text>
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Routes>
        <Route path="/tables" element={<Table />} />
      </Routes>
    </>
  );
}

export default Sidebar;
