import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/Cartslice';
import Grid from '@mui/material/Grid';


function Products() {
    const dispatch = useDispatch()
    const [Products, setProduct] = useState([]);
    const fetchProduct = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data)
        setProduct(data)


    }
    useEffect(() => {
        fetchProduct()
    }, [])

    const handleAdd = (Products) => {
        dispatch(add(Products))


    }
    return (
        <div className='productsWrapper'>

            {
                Products.map(Products => (
                    <div className='card' key={Products.id}>
                        <img src={Products.image} alt="" />
                        <h4>{Products.title}</h4>
                        <h5>${Products.price}</h5>
                        <button onClick={() => handleAdd(Products)} className="btn">
                            Add to cart
                        </button>

                    </div>
                ))
            }

 

        </div>
    )
}

export default Products