import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Content from "../components/Writing_quote/Content"
import Banner from "../components/Writing_quote/Banner";

export default function QuoteW() {
    return (
        <Layout className="with-banner quote">
            <Header black>
                <Banner />
            </Header>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}