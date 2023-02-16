
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Head from 'next/head'
import ProductsList from '@/components/ProductsList'


export default function Home() {
  return (
    <>

<Layout>

<div >
<ProductsList />

</div>
</Layout>



 

    </>
  )
}
