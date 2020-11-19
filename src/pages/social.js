import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Social/Banner"
import Intro from "../components/Social/Intro"
import Contact from "../components/Social/Contact"

export default function Home() {
  return (
    <Layout className="with-banner social">
      <Header black>
        <Banner />
      </Header>
      <main>
        <Intro/>
        <Contact/>
      </main>
    </Layout>
  )
}
