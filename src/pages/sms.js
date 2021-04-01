import React from "react"
import Layout from "../components/Layout"
import Content from "../components/Sms/Content"

export default function Sms() {
    return (
        <Layout className="with-banner signIn">
            <main>
                <Content/>
            </main>
        </Layout>
    )
}