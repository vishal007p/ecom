import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';


const Navbar = () => {
    const items = useSelector((state) => state.cart)

    let login = JSON.parse(localStorage.getItem('login'));

   

    useEffect(() => {
        document.title = `CART ITEMS  (${items.length})`;
    })


    const Logout = () => {
        localStorage.clear()
    }



    return (
        <div
            style={{
                display: 'flex',
                padding: '20px 0px',
                justifyContent: 'space-between',
                position: 'sticky',
                top: '0',
                background: 'white', zIndex: '1000'


            }}
        >
            <div style={{ width: '80%', margin: 'auto', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '50%' }}>
                    <span className="logo">REDUX STORE</span>
                </div>

                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <Link className="navLink" to="/">
                            Home
                        </Link>
                        <Link className="navLink" to="/cart">
                            Cart
                        </Link>
                        <span className="cartCount"><ShoppingCartIcon />{items.length}</span>

                        {
                            login ? <button onClick={Logout} style={{ padding: '5px 20px', marginLeft: '10px' }}><a href=''>Logout</a> </button> : <button style={{ padding: '5px 20px', marginLeft: '10px' }}><a href='/'>Login</a> </button>
                        }




                        <Avatar sx={{ marginLeft: '10px' }} alt="Remy Sharp" src={login?.avatar} />





                    </div>
                </div>





            </div>
        </div>



    );
};

export default Navbar;