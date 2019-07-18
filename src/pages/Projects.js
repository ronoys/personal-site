import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";

import Button from "../components/Button";
import Dash from "../components/Dash";


const ThirdPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Menu></Menu>
    <div>
    <h1>Projects</h1>
    <p>This is a paragraph.</p> 
    </div>
    
    <div>

    <Button></Button> 
    <Dash></Dash>
    

    </div>
    
  </Layout>
)

export default ThirdPage;
