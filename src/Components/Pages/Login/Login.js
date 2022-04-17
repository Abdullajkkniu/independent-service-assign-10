import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors]=useState({
        email: "",
        password: "",
        general: ""
    })
    

    const [
        signInWithEmailAndPassword,  user,loading,error,] = useSignInWithEmailAndPassword(auth);

        

        

        const handleEmailChange=e =>{
            const emailRegex = /\S+@\S+\.\S+/;
            const validEmail = emailRegex.test(e.target.value);
            if(validEmail){
                setUserInfo({...userInfo, email: e.target.value});
                setErrors({...errors, email:""})
            }
            else{
                setErrors({...errors, email:"invalid email"})
                setUserInfo({...userInfo, email: ""})
            }
        }
        const handleLogin=(e)=>{
            e.preventDefault();
            console.log(userInfo)
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        const handlePasswordChange=e =>{
            const passwordRegex = /.{6,}/;
            const validPassword = passwordRegex.test(e.target.value);
            if(validPassword){
                setUserInfo({...userInfo, password: e.target.value});
                setErrors({...errors, password:""})
                
            }
            else{
                setErrors({...errors, password:"invalid password"})
                setUserInfo({...userInfo, password: ""});
            }
        }
        useEffect(() => {
            const error1 = error;
            if(error1){
                switch(error1?.code){
                    case "auth/invalid-email":
                        alert("Invalid email provided, please provide a valid email");
                        break;
                    
                    case "auth/invalid-password":
                        alert("Wrong password. Intruder!!")
                        break;
                    default:
                        alert("Invalid email and password")
                }
            }
        }, [error]);
        

        const navigate = useNavigate()
            const location = useLocation()
            const from = location.state?.from?.pathname || "/";
        useEffect(()=>{
            if(user){
                navigate(from)
            }
        }, [user])


    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input className='w-25 d-block mb-3 m-auto p-2 border' onChange={handleEmailChange} type="text" placeholder='Your name' />
                {errors?.email && <p>{errors.email}</p> }
        
                <input className='w-25 d-block m-auto p-2 border mb-3' onChange={handlePasswordChange} type="password" placeholder='Your password' />
                {errors?.password && <p>{errors.password}</p> }
                <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
                <Link to="/reset">Forget Password?</Link>

                <button className='btn btn-primary px-4 d-block m-auto p-2 border'>Login</button>
            </form>
        </div>
    );
};

export default Login;