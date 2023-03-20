import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../components/message/SuccessMessage.JS';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async () => {
       

        await axios("https://api.escuelajs.co/api/v1/users").then((res) => {
            const data = res.data
            console.log(email, password)
            const find_user = data.find((e) => e.email == `${email}` && e.password == `${password}`)
            console.log(find_user, "====login=====")
            if (find_user) {


                const user = localStorage.setItem("login", JSON.stringify(find_user));
                
                navigate("/home")
                alert("Login")


            } else {
                // alert("no user available")
            }
            console.log(find_user)
        }).catch(err => console.log(err))
    }


    return (
        <>

 
        <div className='form_main'>


            <div className='form_div'>


                <form onSubmit={handleSubmit}>
                    <div className='form_input'>
                        <div style={{ marginLeft: '10px', padding: '20px 0px' }}>
                            <label htmlFor="email" style={{ color: 'black', fontWeight: 'BOLD', fontSize: '20px' }}>Email:</label>
                        </div>

                        <input
                        placeholder='Enter email address'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='form_input'>
                        <div style={{ marginLeft: '10px', padding: '20px 0px' }}>
                            <label htmlFor="password" style={{ color: 'black', fontWeight: 'BOLD', fontSize: '20px' }}>Password:</label>
                        </div>

                        <input
                            placeholder='Enter Your Password'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn' onClick={handleSubmit()}>LOGIN</button>

                </form>


            </div>
        </div>

         
       </>
    );
}

export default LoginPage;
