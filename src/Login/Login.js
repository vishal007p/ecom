import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../components/message/SuccessMessage.JS';
import google from '.././img/google.svg';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase/firebase';



function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    const handleSubmit = async (event) => {
        event.preventDefault()

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



    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {


                const user = result.user.providerData;
                let user_two = Object.assign({}, ...user)
                const userLogin = localStorage.setItem("login", JSON.stringify(user_two));
                navigate("/home")


                // ...
            }).catch((error) => {

                // ...
                console.log(error)
            });
    };
    


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
                        <button type='submit' className='btn' >LOGIN</button>

                    </form>
                    <div>
                        <div>
                            <img src={google} alt="" width="40px" onClick={handleGoogleLogin} />
                        </div>

                    </div>


                </div>
            </div>



            <form onSubmit={handleSubmit}>
                <label htmlFor="verificationCode">Verification Code</label>
                <input
                    type="text"
                    id="verificationCode"
                    // value={verificationCode}
                    // onChange={(event) => setVerificationCode(event.target.value)}
                    required
                />
                <button type="submit">Verify Code</button>
            </form>


        </>
    );
}

export default LoginPage;
