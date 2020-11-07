import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "react-seo-component"
import {
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Text,
  Divider,
  Flex,
  Icon
} from "@chakra-ui/core"
import {
    EmailIcon,
    TwitterIcon,
    WeiboIcon,
    EmailShareButton,
    TwitterShareButton,
    WeiboShareButton
} from"react-share"
import { BackTop} from "antd"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { previous, next } = pageContext
    const style = {
        height: 35,
        width: 35,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#2E8BC0',
        color: '#fff',
        textAlign: 'center',
        fontSize: 8,
    };
    
  return (
    <Layout>
          <SEO
              title={post.frontmatter.title}
              titleTemplate={`{ post.frontmatter.title }` - `{ site.siteMetadata.title }`}
              titleSeparator={`-`}
              description={post.frontmatter.description}
              image={post.frontmatter.img.childImageSharp.fixed.src}
              pathname={post.frontmatter.path}
              siteLanguage="zh"
              siteLocale="zh_CN"
              twitterUsername=""
              author={post.frontmatter.author}
              article={true}
              publishedDate={post.frontmatter.date}
              modifiedDate={post.frontmatter.date}
          />
          <Flex align="flex-start" flexDirection="row" pt={3}>
              
              <Box w="20%">
                  <Menu closeOnSelect={false}>
                      <MenuButton as={Button} variantColor="blue">
                          博客栏
                      </MenuButton>
                      <MenuList minWidth="240px">
                          <MenuOptionGroup defaultValue="" title="文章" type="radio">
                  {data.allMarkdownRemark.nodes.map(list => {
                      return (
                          
                              


                                      <MenuItemOption
                                      value={list.frontmatter.title}>
                                      {<Link to={list.fields.slug}>{list.frontmatter.title}</Link>}
                                      </MenuItemOption>
                                  
                                  

                            
                  
                      )
                  })}
                               
                          </MenuOptionGroup>
                      </MenuList>
                  </Menu>
              </Box>
              
              <Box
                  w="60%"

      >
                  <Heading
                      as="h1"
                      fontFamily="NotoSansSC-Medium"
        >
                        {post.frontmatter.title}
                  </Heading>
                  <Flex flexDirection="row-reverse">
                      <Box>
                          <EmailShareButton url={post.frontmatter.path} subject={post.frontmatter.title}>
                              <EmailIcon size={24} round={true} />
                          </EmailShareButton>
                  </Box>
                      <Box>
                          <TwitterShareButton url={post.frontmatter.path} title={post.frontmatter.title}>
                              <TwitterIcon size={24} round={true} />
                          </TwitterShareButton>
                  </Box>
                  <Box>

                          <WeiboShareButton
                              title={post.frontmatter.title}
                              url={post.frontmatter.path}
                              >
                              <WeiboIcon size={24} round={true} />
                          </WeiboShareButton>
                      </Box>
                  </Flex>
                <Divider pt={15} borderColor="#BCA88E" />
          
                 
                      <Text
                        fontSize="1rem"
                        color="#a8a9a6"
                        
          
                  >    作者：{post.frontmatter.author}
                       
                          
                      </Text>
                    
                       <Text
                        fontSize="1rem"
                        color="#a8a9a6"
                        
                        

                          >
                       概要：{post.frontmatter.description}     
                       
                       </Text>
                   
              
          
                  <Divider borderColor="#BCA88E" />

                  <Box
                     dangerouslySetInnerHTML={{ __html: post.html }}>

                  </Box>
              </Box>
              <Box w="20%"></Box>
         
          </Flex>
          <Flex
              flexDirection="row"
          >
              <Box w="50%" h={80} margin={10}>
                  {previous && (
                      <Link to={previous.fields.slug} rel="nepreviousxt">
                          <Icon name="arrow-back" size="24px" color="#2A69AC" />
                          <Heading as="h6" size="xs">
                              {previous.frontmatter.title}
                          </Heading>
                      </Link>
                  )}
              </Box>

              <Box w="50%" h={80} margin={10} textAlign="right">
                  {next && (
                      <Link to={next.fields.slug} rel="next">
                          <Icon name="arrow-forward" size="24px" color="#2A69AC" />
                          <Heading as="h6" size="xs">
                              {" "}
                              {next.frontmatter.title}
                          </Heading>
                      </Link>
                  )}
              </Box>
          </Flex>
          <BackTop style={style}>{<Icon name="arrow-up" size="35px" />}</BackTop>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
          siteMetadata {
            title
            description
            author
          }
        }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        authorimg {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        date(formatString: "YYYY-MM-DD")
        description
        img {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        featuredpost
        tags
        title
      }
      html
    
    }
allMarkdownRemark{
              
              nodes{
                frontmatter{
                    title
              }
                fields{
                    slug
                }
              }
          }
  }
`
