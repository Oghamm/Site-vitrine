import React from "react"
import Layout from "../components/Layout"
import StickHeader from "../components/Header/StickyHeader"
import AboutComp from "../components/About"
import useIntlFromDocs from "../hooks/useIntlFromDocs"

export default function About() {
  const { getTranslation } = useIntlFromDocs()

  return (
    <Layout className="interne one-screen about">
      <main>
        <StickHeader
          asideContent={
            <h1 className="aside__title--title">{getTranslation("about")}</h1>
          }
        >
          <AboutComp />
        </StickHeader>
      </main>
    </Layout>
  )
}
