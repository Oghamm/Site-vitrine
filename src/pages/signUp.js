import React from "react"
import Layout from "../components/Layout"
import Content from "../components/SignUp/Content"

export default function SignUp() {
    return (
        <Layout className="with-banner signIn">
            <main>
                <Content/>
            </main>
        </Layout>
    )
}