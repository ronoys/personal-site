import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";

import Button from "../components/Button";

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <Menu></Menu>
    <div>
    <h3>This is a heading</h3>
    <p>This is a paragraph.</p>
    </div>
    
    <div>

    <Button></Button>


    </div>
    
  </Layout>
)

export default ThirdPage;
