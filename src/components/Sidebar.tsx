import React from "react";
import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import Table from "./Table.tsx";

// Simple Home component
const Home = () => (
  <Box p={4} textColor="light">
    <Text fontSize="2xl">Welcome to Restaurant Management</Text>
    <Text>Select Tables from the sidebar to manage your restaurant tables.</Text>
  </Box>
);

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
      <Box flex="1" p={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Table />} />
        </Routes>
      </Box>
    </>
  );
}

export default Sidebar;
