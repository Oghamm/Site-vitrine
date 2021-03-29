import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Migrate/Banner"
import Content from "../components/Migrate/Content"

export default function Migrate() {
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