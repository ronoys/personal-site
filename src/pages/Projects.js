import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";
import ProjectsSampleTile from "../components/ProjectsSampleTile";

const ThirdPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Menu></Menu>

    <div>
    
    
    <ProjectsSampleTile></ProjectsSampleTile>
    <ProjectsSampleTile></ProjectsSampleTile>
    


    </div>

    
    
    
      
  </Layout>
)

export default ThirdPage;
