import React from "react"
import {
    Box,
    Flex,
} from "@chakra-ui/core"
import { Link } from "gatsby"


const Header = () => (
    <Box w="100%" bg="#274472" h={85} pt={30}>
        <Flex align="center">
            <Link to="/">
                <Box fontSize={15} color="rgba(255, 255, 255, 0.8)" flex={2} pl="3rem">VCN</Box>
            </Link>
            <Box flex={6}></Box>
            <Flex flex-direction="row-reverse" textAlign="right" flex={2}>
                <Link to="/about/">
                <Box w={85} bg="#274472" border="none" color="white">
                   
                        了解我们
                    
                </Box>
                </Link>
                <Link to="/vitalik/">
                <Box w={85} mr={100} bg="#274472" border="none" color="white">
                   
                        关于Vitalik
                    
                </Box>
                </Link>
            </Flex>   
           
        </Flex>
         
    </Box>
)

export default Header
