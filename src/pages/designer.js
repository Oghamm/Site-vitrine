import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Designer/Banner"
import Content from "../components/Designer/Content"

export default function Designer() {
    return (
        <Layout className="with-banner designer">
            <Header black>
                <Banner />
            </Header>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}
