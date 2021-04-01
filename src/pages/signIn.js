import React from "react"
import Layout from "../components/Layout"
import Content from "../components/SignIn/Content"

export default function SignIn() {
    return (
        <Layout className="with-banner signIn">
            <main>
                <Content/>
            </main>
        </Layout>
    )
}