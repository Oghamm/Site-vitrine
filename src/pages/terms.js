import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Terms/Banner"
import Content from "../components/Terms/Content"

export default function Terms() {
    return (
        <Layout className="with-banner terms">
            <Header black>
                <Banner />
            </Header>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}