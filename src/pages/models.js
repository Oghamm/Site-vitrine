import React from "react"
import Layout from "../components/LayoutModels"
import Content from "../components/Models/Content"

export default function Models() {
    return (
        <Layout className="with-banner models">
            <main>
                <Content/>
            </main>
        </Layout>
    )
}