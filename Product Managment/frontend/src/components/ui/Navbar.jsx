import {  Button, Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import { useColorMode } from './color-mode';
import { LuSun } from 'react-icons/lu';
import {IoMoon} from "react-icons/io5"


const Navbar = () => {
    const { colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex gap={4} direction={{base:"column", sm:"row"}} h={16} align={'center'} justifyContent={'space-between'}>

        <Text bgGradient="to-l" gradientFrom={"cyan.400"} gradientTo={'blue.500'} bgClip={'text'} fontSize={{ base:"large", sm:"larger"}} fontWeight={'bold'} textAlign={"center"} textTransform={'uppercase'}>
        <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack gap={2} alignItems={"center"}>
            <Link to={"/create"}>
            <IconButton >
            <FaPlus />
            </IconButton>
            </Link>

            <Button onClick={toggleColorMode}>
                {colorMode === 'light'? <IoMoon /> : <LuSun size={"20"} />}
            </Button>
        </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar