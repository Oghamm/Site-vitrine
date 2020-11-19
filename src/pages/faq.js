import React from "react"
import Layout from "../components/Layout"
import StickHeader from "../components/Header/StickyHeader"
import FAQComp from "../components/Faq"

export default function FAQ() {
  return (
    <Layout className="interne one-screen faq">
      <main>
        <StickHeader
          asideContent={<h1 className="aside__title--title white">FAQ</h1>}
        >
          <FAQComp />
        </StickHeader>
      </main>
    </Layout>
  )
}
