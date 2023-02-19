import React, { useEffect } from 'react'
import Layout from "@/components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {signIn, useSession} from 'next-auth/react'
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


const loginScreen = () => {
    const {data: session} = useSession();

    const router = useRouter();
    const {redirect} = router.query;
    useEffect(() =>{
        if (session?.user){
            router.push(redirect || '/');
        }

    }, [router,session,redirect]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = async ({email,password}) =>{
        try{
            const result = await signIn('credentials',{
                redirect:false,
                email,
                password,
            });
            if(result.error){
                toast.error(result.error)
            }

        } catch(err){
             toast.error(getError(err))
        }
    }
  return (
    <Layout title="Login">
    <div>
      <form onSubmit={handleSubmit(submitHandler)} >
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" 
          {...register('email', {required: 'please enter email',
          pattern:{
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
            message:'Please enter valid email '
          }
        
        })}
          id="email" autoFocus></input>
          {/* show error message from useform*/}
          {errors.email && (<div>{errors.email.message} </div>)}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" 
          {...register('password',{
            required:'please enter password',
            minLength:{value:6 , message: 'password must be more than 5 chars'}
          })}
          
          id="password" autoFocus></input>
          {errors.password && (
            <div> {errors.password.message}</div>
          )}
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          Don&apos;t have an account ? &nbsp;
          <Link href="/register">Register</Link>
        </div>
      </form>
    </div>
  </Layout>
  )
}

export default loginScreen