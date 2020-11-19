import React from "react"
import Footer from "../Footer"
import Head from "./Head"
import {Elements, StripeProvider} from 'react-stripe-elements-universal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/bootstrap-grid.min.css"
import "../../assets/css/app.scss"


const Layout = ({ className, children }) => {
  return (
    <StripeProvider apiKey="pk_test_51HZGJLDmzUiZrO9sSbmT85FqSTPB9Dybldj3rriWul4OIS8nwYcgj5M6PNCvNruk67xhRQ5QTaHRMS3rPHEfnAEC00gjN6tRT9">
    <div className={className} >
      <Head />
      {children}
      <Footer />
    </div>
    </StripeProvider>
  )
}

export default Layout
