import React from 'react'
import Layout from "@/components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";

const loginScreen = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitHandler = ({email,password}) =>{

    }
  return (
    <Layout title="Login">
    <div>
      <form onSubmit={handleSubmit(submitHandler)} >
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" 
          {...register('email', {required: 'please enter email'})}
          id="email" autoFocus></input>
          {errors.email && (<div>{errors.email.message} </div>)}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoFocus></input>
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