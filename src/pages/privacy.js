import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Privacy/Banner"
import Content from "../components/Privacy/Content"

function Privacy(){
    return (
        <Layout className="with-banner privacy">
            <Header black>
                <Banner />
            </Header>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}