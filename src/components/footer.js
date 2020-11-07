import React from "react"
import { Flex, Text} from "@chakra-ui/core"

const Footer = () => {
    
  return (
    <Flex
      backgroundColor="#274472"
      justifyContent="center"
      height={110}
      flexDirection="column"
      alignItems="center"
    >
      <Text
        color="white"
        fontWeight="bold"
        fontSize="16px"
        fontFamily="NotoSansSC-Bold"
        letterSpacing="5px"
      >
        VCN中文站
      </Text>
     
    </Flex>
  )
}

export default Footer
