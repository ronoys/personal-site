import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import AboutUsTile from "../components/AboutUsTile"


const IndexPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Menu></Menu>
    
    <AboutUsTile></AboutUsTile>
  </Layout>
)

export default IndexPage
