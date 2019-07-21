import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";
import ContactForm from "../components/ContactForm"



const ThirdPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Menu></Menu>
    
    
    <ContactForm></ContactForm>

    
    
  </Layout>
  
  
)

export default ThirdPage;
