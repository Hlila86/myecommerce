import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
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
                <Link href="/cart">Cart</Link>


                </div>

            </nav>
        </div>
    )
}

export default Navbar