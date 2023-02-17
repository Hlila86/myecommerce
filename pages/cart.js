import Layout from '@/components/Layout'
import { Store } from '@/utils/Store';
import Link from 'next/link';
import React, { useContext } from 'react'
import styles from '../styles/Cart.module.css'
import {MdOutlineDelete} from 'react-icons/md'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function CartScreen () {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const removeItemHandler = (item) =>{
        dispatch( {type: 'CART_REMOVE_ITEM' , payload: item})
    }

    const updateCartHandler = (item , qty) => {
        const quantity = Number(qty);
        dispatch({type: 'CART_ADD_ITEM' , payload:{...item, quantity}})
    }
    return (

        <Layout title='Shoping Cart'>
            
            {
                cartItems.length === 0 ?
                    (<div>
                        Cart is Empty <Link href="/">Go shoping store</Link>
                    </div>) : (
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>


                                    </thead>

                                    <tbody>
                                        {cartItems.map((item)=>(
                                            <tr key={item._slug} className={styles.tableRow}>
                                                <td>
                                                    <Link href={`/product/${item.slug}`} className={styles.image}>
                                                        <img 
                                                        src={item.image}
                                                        alt={item.name}
                                                        />
                                                        &nbsp;
                                                        {item.name}

                                                    </Link>
                                                </td>

                                                <td>

                                                    <select value={item.quantity} onChange={(e) => updateCartHandler(item , e.target.value)}>

                                                    {
                                                        [...Array(item.countInStock).keys()].map(x =>(
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        ) )
                                                    }
                                                    </select>
      

                                                </td>
                                                <td>${item.price}</td>
                                                <td>
                                                    <button onClick={() => removeItemHandler(item)} className={styles.remove}>
                                                        <MdOutlineDelete />
                                                    </button>
                                                </td>

                                                
                                               

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.right}>
                                <ul>
                                    <li>
                                        <div>Subtotal ({cartItems.reduce((a,c) => a + c.quantity , 0)})
                                        {' '}
                                        : $
                                        {cartItems.reduce((a,c) => a + c.quantity * c.price , 0)}
                                        </div>
                                    </li>
                                    <li>
                                        <button class="btn" onClick={ () => router.push('/shiping')}>
                                           Check Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }
        </Layout>

    )
}

export default dynamic(()=> Promise.resolve(CartScreen), {ssr:false}) 