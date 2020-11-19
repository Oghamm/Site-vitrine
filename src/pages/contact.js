import React, { useState } from "react"
import Layout from "../components/Layout"
import StickHeader from "../components/Header/StickyHeader"
import Contact from "../components/Contact"
import Aside from '../components/Contact/Aside'


export default function Home() {
  const [fomValueReason,setFomValueReason] = useState("problem");
  return (
    <Layout className="interne one-screen contact">
      <main>
        <StickHeader asideContent={<Aside setFomValueReason={setFomValueReason} />}>
          <Contact fomValueReason={fomValueReason}/>
        </StickHeader>
      </main>
    </Layout>
  )
}
