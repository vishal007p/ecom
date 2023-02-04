import React from 'react'
import Products from '../components/Products';

function Home() {
    return (
        <div>

            <h2 className='heading'>Welcome to The Redux toolkit Store</h2>

            <section>
                <h3>Products</h3>
                <Products/>
            </section>

        </div>
    )
}

export default Home;