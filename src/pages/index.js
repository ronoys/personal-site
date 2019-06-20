import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu></Menu>
    <h1>About Me</h1>
    <p>Here is some information about me.</p>
    
    
    
  </Layout>
)

export default IndexPage
