import Link from 'next/link'
import React from 'react'
import styles from '../styles/ProductItem.module.css'

const ProductItem = ({ product }) => {
    return (
        <div className={styles.container}>

            <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className={styles.image} />

            </Link>

            <div className={styles.details}>
                <Link href={`/product/${product.slug}`}>
                    <h2>{product.name}</h2>
                </Link>
            </div>

           <p className={styles.brand}>{product.brand}</p>
           <p className={styles.price}>${product.price}</p>
           <button className={styles.button} type="button">
            Add To Card
           </button>

        </div>
    )
}

export default ProductItem