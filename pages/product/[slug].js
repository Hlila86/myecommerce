import Layout from '@/components/Layout'
import data from '@/utils/data';
import { Store } from '@/utils/Store';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import styles from '../../styles/Product.module.css'

const Product = () => {
    const {state , dispatch} = useContext(Store);
    const router = useRouter();
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find(x => x.slug === slug)
    if (!product){
        return <div> Product Not Found</div>
    }

    const addToCartHandler = ()=>{
        const existItem = state.cart.cartItems.find((x) => x.flug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
dispatch({ type: 'CART_ADD_ITEM' , payload: {...product , quantity }})
router.push('/cart')
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

<div>
<div>Status :</div>
<div> {product.countInStock > 0 ? 'In Stock' : 'Unavailable'} </div>
<button class="btn" type="button" onClick={addToCartHandler} >Add To Cart</button>

</div>




    </div>
</div>


    

</Layout>
  )
}

export default Product