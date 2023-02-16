import data from '@/utils/data'
import React from 'react'
import styles from '../styles/ProductsList.module.css'
import ProductItem from './ProductItem'

const productsList = () => {
  return (
    <div className={styles.container}>
{data.products.map((product)=>(
  <ProductItem product={product} key={product.slug}/>
))}


    </div>
  )
}

export default productsList