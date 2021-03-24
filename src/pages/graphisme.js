import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Graphisme/Banner"
import Content from "../components/Graphisme/Content"

export default function Graphisme() {
  return (
    <Layout className="with-banner graphisme">
      <Header black>
        <Banner />
      </Header>
      <main>
          <Content/>
      </main>
    </Layout>
  )
}
