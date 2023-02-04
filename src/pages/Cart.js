import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from '../components/Products';
import { remove } from '../store/Cartslice';

const Cart = () => {
    const dispatch = useDispatch();
    const Productss = useSelector((state) => state.cart);
    console.warn(Productss);
     
    const handleRemove = (ProductsId) => {
        dispatch(remove(ProductsId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {Productss.map((Products) => (
                    <div key={Products.id} className="cartCard">
                    <img src={Products.image} alt="" />
                        <h4>{Products.title}</h4>
                        <h5>{Products.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(Products.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
