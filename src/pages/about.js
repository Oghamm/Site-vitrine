import React from "react"
import Layout from "../components/Layout"
import StickHeader from "../components/Header/StickyHeader"
import AboutComp from "../components/About"

export default function About() {

  return (
    <Layout className="interne one-screen about">
      <main>
        <StickHeader
          asideContent={
            <h1 className="aside__title--title">à propos</h1>
          }
        >
          <AboutComp />
        </StickHeader>
      </main>
    </Layout>
  )
}
