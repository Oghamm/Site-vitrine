import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Banner from "../components/Developer/Banner"
import Content from "../components/Developer/Content"

export default function SignIn() {
    return (
        <Layout className="with-banner developer">
            <Header black>
                <Banner />
            </Header>
            <main>
                <Content/>
            </main>
        </Layout>
    )
}