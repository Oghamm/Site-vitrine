import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Privacy/Banner"
import Content from "../components/Privacy/Content"

export default function Privacy(){
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