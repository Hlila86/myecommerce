import Layout from '@/components/Layout'
import { Store } from '@/utils/Store';
import Link from 'next/link';
import React, { useContext } from 'react'
import styles from '../styles/Cart.module.css'

const CartScreen = () => {
    const {state , dispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } = state;
  return (

    <Layout title='Shoping Cart'>
    <div className={styles.container}>cart</div>
{
    cartItems.length === 0 ? 
    (<div>
        Cart is Empty <Link href="/">Go shoping store</Link>
    </div>) : (
        <div>
            
        </div>
    )
}
    </Layout>

  )
}

export default CartScreen