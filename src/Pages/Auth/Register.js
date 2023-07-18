import React from 'react';
import {useState, useEffect} from 'react';
import styles from './auth.module.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/Config';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  // const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const registerUser = (e)=>{
    e.preventDefault()
    if(password !== cpassword){
      toast.error("password incorrect")
    }
    if(password.length<6){
      toast.error("password must not be less than 6")
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user=userCredential.user
      console.log(user)

      toast.success("registration successful")

    })
    .catch((error) =>{
      toast.error(error)

    })
   
    
    setEmail('')
    setPassword('')
    setCpassword('')
  }

  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <input type='password' placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
          <input type='password' placeholder='Confirm'value={cpassword} onChange={(e)=>setCpassword(e.target.value)} required/>

          <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
        </form>

        <span className={styles.register}>
          <p>Already have an account</p>
          <Link to="/login">login</Link>
        </span>

      </div>

    </section>
  )
}

export default Register