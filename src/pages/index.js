import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import About from '../components/about'
import LangIcons from '../components/iconPack'
import Layout from "../components/layout"
import Links from '../components/linkIcons'
import Image from '../components/image'
import Project1 from '../components/project_1'
import Project2 from '../components/project_2'
import Project3 from '../components/project_3'
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div id="myName">
        <h1 className="firstName">Nick</h1>
        <svg viewBox="0 0 60 18">
          <text className="lastName" x="0" y="15">Quandt</text>
        </svg>
        <p id="human">( human. )</p>
      </div>
    <div className="aboutMe">
        <div className="row">
          <Image />
          <Links />
          <LangIcons />
        </div>
      <br/>
      <br/>
      <div id="color1" />
      <div id="color2" />
    </div>
    <div id="right">
      <About />
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  </Layout>
)

export default IndexPage
