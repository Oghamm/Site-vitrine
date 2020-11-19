import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Translate/Banner"
import Content from "../components/Translate/Content"

export default function Home() {
  return (
    <Layout className="with-banner translate choices">
      <Header black>
        <Banner />
      </Header>
      <main>
        <Content/>
      </main>
    </Layout>
  )
}
