import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu></Menu>
    <h1>Projects</h1>
    <p>Welcome to page 2</p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
