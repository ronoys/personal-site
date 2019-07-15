import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";

import Button from "../components/Button";
import Gridlist from "../components/Gridlist";


const ThirdPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Menu></Menu>
    <div>
    <h3>This is a heading</h3>
    <p>This is a paragraph.</p>
    </div>
    
    <div>

    <Button></Button>
    <Gridlist></Gridlist>

    </div>
    
  </Layout>
)

export default ThirdPage;
