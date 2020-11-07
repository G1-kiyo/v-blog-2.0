import React from "react"
import Layout from "../components/layout"
import {
  Flex,
  Box,
  Text,
  Divider,
  Heading
} from "@chakra-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComments, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/seo"


const About = () => {
   
  return (
    <Layout>
          <SEO title="关于" />
          <Flex flexDirection="column" mb={35}>
              <Box h={250} w="100%" bg="white" p={20} textAlign="center">
              <Text fontSize={28} color="#E1E2E7" >
                  让更多人了解区块链
              </Text>
                  <p>简洁，高效，高质</p>
          </Box>
          
              <Divider borderColor="#C3E0E5" />
          <Box
                  textAlign="left"
                  h="auto"
                  w="100%"
                  pl={15}
                  pr={15}>
              <h2>我们是谁？</h2>
              <p>VCN站内工作者是由哥德尔实验室（GODEL LAB）中一群有着共同爱好和兴趣的小伙伴组成。小组成员积极学习区块链知识，在与区块链资深学者共同讨论的过程中对区块链领域有了更深的认识，并希望通过自身英语翻译能力准确传达Vitalik博客文章内容中的真正内涵。</p>
                  <Divider borderColor="#C3E0E5" />
              
          </Box>
          <Box
                  textAlign="right"
                  h="auto"
                  w="100%"
                  pl={15}
                  pr={15}>
              <h2>我们做什么？</h2>
              <p textAlign="left">VCN是负责将Vitalik博客文章进行准确翻译的中文网站，致力于推动区块链知识在国内的传播，让更多感兴趣的人士了解区块链，学习区块链。
                  除此之外，我们也充当着沟通的桥梁，希望能通过对文章的搬运为国内区块链爱好者和Vitalik以及国外其他资深的区块链研究者展开积极会话提供便利。</p>

          </Box>
              <Divider borderColor="#C3E0E5" />
              <Heading as="h2" >哥德尔实验室</Heading>
              <Flex id="intro" flexDirection="row" mt={10}>
                  <Box flex={1} pr={20} pl={10}>
                      <FontAwesomeIcon icon={faCoffee} size="6x" />
                      <Text>
                          哥德尔实验室提供温暖舒适的工作环境。工作之余，你也可以在空闲时间选择自己喜欢的方式放松一下。
                      </Text>
                      
                  </Box>
                  <Divider orientation="vertical" color="#29A0B1" />
                  <Box flex={1} pr={20} pl={10}>
                      <FontAwesomeIcon icon={faComments} size="6x" />
                      <Text>
                          哥德尔实验室拥有融洽的讨论氛围。在这里，你可以和小组成员畅所欲言，提出自己的个人想法，并针对项目进行有效交流。
                      </Text>
                      
                  </Box>
                  <Divider orientation="vertical" color="#29A0B1" />
                  <Box flex={1} pr={20} pl={10}>
                      <FontAwesomeIcon icon={faLightbulb} size="6x" />
                      <Text>
                          哥德尔实验室欢迎各种新鲜有趣的想法。如果你有什么惊人的发现，不妨大胆告诉我们。
                      </Text>
                  </Box>
              </Flex>
          </Flex>
    </Layout>
  )
}

export default About
