import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { Store } from '@/utils/Store'
import {BiUser} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
    const {state , dispatch} = useContext(Store);
    const {cart} = state;
    const [cartItemsCoun, setCartItemsCount] = useState(0);
    useEffect(() =>{
        setCartItemsCount(cart.cartItems.reduce((a,c) => a + c.quantity, 0))
    },[cart.cartItems])
    
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    MyEcommerce 
                </Link>

                <div className={styles.menu}>
                    <Link href="/hommes">Hommes</Link>
                    <Link href="/femmes">Femmes</Link>

                </div>

                <div className={styles.right}>
                <Link href="/login">
                   <BiUser />
                    Login</Link>
                <Link href="/cart"> <AiOutlineShoppingCart />
                    Panier
                {cartItemsCoun > 0 && (
                 <span class="cartBag">
                    {cartItemsCoun}
                 </span>
                )}
                
                </Link>


                </div>

            </nav>
        </div>
    )
}

export default Navbar