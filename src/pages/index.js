import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Dash from "../components/Dash"

const IndexPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Menu></Menu>
    <h1>About Us</h1>
    <p>Here is some information about us.</p>
    <Dash></Dash>
  </Layout>
)

export default IndexPage
