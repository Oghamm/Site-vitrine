import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Writing/Banner"
import Content from "../components/Writing/Content"

export default function Writing() {
  return (
      <Layout className="with-banner writing choices">
          <Header black>
              <Banner />
          </Header>
          <main>
              <Content/>
          </main>
      </Layout>
  )
}
