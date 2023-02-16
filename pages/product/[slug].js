import Layout from '@/components/Layout'
import data from '@/utils/data';
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/Product.module.css'

const Product = () => {
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find(x => x.slug === slug)
    if (!product){
        return <div> Product Not Found</div>
    }
  return (
<Layout title={product.name}>

<div className={styles.container}>

    <div className={styles.left}>
        <div className={styles.imgContainer}>
            <img src={product.image} alt={product.name} />

            <div className={styles.smallImages}>
                <div className={styles.smallImage}>
                    img1
                </div>
                <div className={styles.smallImage}>
                    img2
                </div>
                <div className={styles.smallImage}>
                    img3
                </div>
                <div className={styles.smallImage}>
                    img4
                </div>

            </div>
        </div>

    </div>

    <div className={styles.right}>
    <h1>{product.name}</h1>

    <div className={styles.prices}>
        <span>$ {product.price}</span>
        <span>$1999</span>
        <span>20%</span>
    </div>
    <span>{product.rating} of {product.numReviews} reviews</span>
<div>
    {product.description}
</div>

    </div>
</div>


    

</Layout>
  )
}

export default Product