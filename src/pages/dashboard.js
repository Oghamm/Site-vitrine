import React from "react"
import Layout from "../components/LayoutModels"
import Content from "../components/Dashboard/Content"

export default function Dashboard() {
    return (
        <Layout className="with-banner dashboard">
            <main>
                <Content/>
            </main>
        </Layout>
    )
}