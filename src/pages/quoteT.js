import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Content from "../components/Translate_quote/Content"
import Banner from "../components/Translate_quote/Banner";

export default function QuoteT() {
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