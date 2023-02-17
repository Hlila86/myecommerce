import Layout from '@/components/Layout'
import { Store } from '@/utils/Store';
import Link from 'next/link';
import React, { useContext } from 'react'
import styles from '../styles/Cart.module.css'
import {AiOutlineDelete} from 'react-icons/ai'
import { useRouter } from 'next/router';

const CartScreen = () => {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const removeItemHandler = (item) =>{
        dispatch( {type: 'CART_REMOVE_ITEM' , payload: item})
    }
    return (

        <Layout title='Shoping Cart'>
            <div className={styles.container}>cart</div>
            {
                cartItems.length === 0 ?
                    (<div>
                        Cart is Empty <Link href="/">Go shoping store</Link>
                    </div>) : (
                        <div>
                            <div>
                                <table>
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
                                            <tr key={item._slug}>
                                                <td>
                                                    <Link href={`/product/${item.slug}`}>
                                                        <img 
                                                        src={item.image}
                                                        alt={item.name}
                                                        />
                                                        &nbsp;
                                                        {item.name}

                                                    </Link>
                                                </td>

                                                <td>{item.quantity}</td>
                                                <td>${item.price}</td>
                                                <td>
                                                    <button onClick={() => removeItemHandler(item)}>
                                                        <AiOutlineDelete />
                                                    </button>
                                                </td>

                                                
                                               

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
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

export default CartScreen