import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import {ToastContainer} from 'react-toastify'


const Layout = ({title , children}) => {


  return (
    <div>
    <Head>
        <title>{title ? title + '-MyEcommerce':'MyEcommerce'}</title>
        <meta name="description" content="MyEcommerce site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1}/>
        <Navbar />
        {children}

        <Footer />
    </div>
  )
}

export default Layout