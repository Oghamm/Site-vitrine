import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Partner/Banner"
import Content from "../components/Partner/Content"

export default function Partner(){
    return (
        <Layout className="with-banner partner">
            <Header black>
                <Banner />
            </Header>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}