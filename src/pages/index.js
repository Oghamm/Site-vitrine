import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import HeroSlider from "../components/Home/HeroSlider"
import Steps from "../components/Home/Steps"
import Why from "../components/Home/Why"
import Template from "../components/Home/Template"
import ServiceCard from "../components/Home/ServiceCard"
import Service from "../components/Home/Service"

export default function Home() {
  return (
    <Layout className="home">
      <Header>
        <HeroSlider />
      </Header>
      <main>
        <Steps/>
        <Why/>
        <Template/>
        <ServiceCard/>
        <Service/>
      </main>
    </Layout>
  )
}
