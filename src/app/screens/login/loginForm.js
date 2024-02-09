'use client'
import React from 'react'
import { useForm } from "react-hook-form"
import styles from './loginform.module.css'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "loose" })
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit((data) => { console.log(data) })}>
        
        <div className={styles.username}>
        <label htmlFor='username'>Enter email id</label>
        <input {...register("username", { required: true })} type="text" placeholder="email"></input>
        {errors.username && <span>Enter a valid email id</span>}
        <hr />
        </div>

        <div className={styles.username}>    
        <label htmlFor='password'>Enter Password</label>
        <input {...register("password", { required: true })} type="password" placeholder="password" />
        {errors.password && <span>This field is required</span>}
        <hr />
        </div>

        <button className={styles.button} onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default LoginForm