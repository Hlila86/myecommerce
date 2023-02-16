import Link from 'next/link'
import React, { useContext } from 'react'
import styles from '../styles/Navbar.module.css'
import { Store } from '@/utils/Store'

const Navbar = () => {
    const {state , dispatch} = useContext(Store);
    const {cart} = state;
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
                <Link href="/login">Login</Link>
                <Link href="/cart">Cart
                {cart.cartItems.lenght > 0 && (
                 <span className={styles.cartBag}>
                    {cart.cartItems.reduce((a,c) => a + c.quantity, 0)}
                 </span>
                )}
                
                </Link>


                </div>

            </nav>
        </div>
    )
}

export default Navbar