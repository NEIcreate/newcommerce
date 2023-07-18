import React, { useState } from 'react';
import styles from './auth.module.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { auth } from '../../Config/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const loginUser = (e)=>{
      e.preventDefault()
      if(password.length<6){
        toast.error("password must not be less than 6")
      }
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        // const user=userCredential.user
        // console.log(user)
  
        toast.success("login successful")
  
      })
      .catch((error) =>{
        toast.error(error)
  
      })
     
      
      setEmail('')
      setPassword('')
    }
  
  return (
    
    <section className={`container ${styles.auth}`}>
    <div className={styles.form}>
      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input type='password' placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
        <button className='--btn --btn-primary --btn-block'>login</button>
        <div className={styles.Link}>
        <Link to="/login">Reset password</Link>
        </div>
        <p>---or---</p>
        <button type='submit' className='--btn --btn-primary --btn-block'>
          <FaGoogle  />Login with Google
        </button>

      </form>

      <span className={styles.register}>
        <p>---or---</p>
        <Link to="/login">Reset password</Link>
      </span>

    </div>

  </section>
  )
}

export default Login