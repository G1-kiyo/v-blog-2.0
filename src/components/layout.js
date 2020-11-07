import React from "react"
import Header from "./header"
import Footer from './footer'
import "./layout.css"
import { Flex, Box } from "@chakra-ui/core";

const Layout = ({ children }) => {

    return (
        <Flex minH='100vh' flexDirection='column'>
            <Header />
            <Box w="100%" flex={1}>{children}</Box>
            <Footer />
        </Flex>
    )
}


export default Layout
