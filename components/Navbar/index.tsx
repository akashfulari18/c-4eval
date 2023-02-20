import Link from "next/link";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box backgroundColor={"cyan.300"} >
      <Flex justifyContent="left" gap="1rem" pl="2rem" alignItems="center" h="3rem">
        <Link href="/">Home</Link>
        <Link href="/people">People</Link>
        
      </Flex>
    </Box>
  );
};

export default Navbar;
