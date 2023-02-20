
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Head from 'next/head'
import ProductsList from '@/components/ProductsList'
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from '@/components/Categories'


export default function Home() {
  return (
    <>

<Layout>
<Slider />

<Categories />
<div >
<ProductsList />

</div>
</Layout>



 

    </>
  )
}
