import React from "react"
import Layout from "../components/layout"
import SEO from "react-seo-component"
import "../components/layout.css"
import { Flex, Box, Badge, Image, Divider, Heading } from "@chakra-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"
const IndexPage = () => {
    const data = useStaticQuery(graphql`
    {
      site {
          siteMetadata {
            title
            description
            author
          }
        }
      allMarkdownRemark(
        filter: { frontmatter: { id: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }, limit: 4
      ) {
        nodes {
          frontmatter {
            path
            title
            author
            date(formatString: "YYYY-MM-DD")
            description
            tags
            authorimg {
              childImageSharp {
                fixed(width: 32, height: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            img {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  `)
    const posts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <SEO
                title="首页"
                titleTemplate="首页-VCN中文站"
                titleSeparator={`-`}
                description="博客索引"
                image="https://i.ibb.co/st7dcTX/20201106230359.png"
                pathname="https://vitalik.netlify.app/"
                siteLanguage="zh"
                siteLocale="zh_CN"
                twitterUsername=""
            />
            <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                    

                    return (
                        <li key={post.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <Flex id="list" align="center" flexDirection="row">
                                    <Box w="15rem" textAlign="center" >
                                        
                                        <small>{post.frontmatter.date}</small><br/>
                                        <Badge VariantColor="rgba(0, 0, 0, 0.4)" variant="solid">
                                            {post.frontmatter.tags}
                                        </Badge>
                                    </Box>
                                    <Box w="40rem" h="auto" pt={10} pb={10} >
                                        <Link to={post.frontmatter.path}>
                                            <Heading as="h2"  color="#1E2640">{post.frontmatter.title}</Heading>
                                        </Link>
                                        <small>{post.frontmatter.author}</small>
                                        <p dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />

                                    </Box>
                                    <Box w="18rem" pl="0.2rem" >
                                        <Image src={post.frontmatter.img.childImageSharp.fluid.src} alt={post.frontmatter.title} maxW="17rem"></Image>
                                    </Box>
                                </Flex>
                            </article>
                            <Divider borderColor="#C3E0E5" />
                        </li>
                    )
                })}
            </ol>
           
        </Layout>
    )
}

export default IndexPage
