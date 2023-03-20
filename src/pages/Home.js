import React, { useState, useEffect } from 'react'
import Products from '../components/Products';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



function Home() {

    const [categories, setCategories] = useState();

    const Categori = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await res.json();
        setCategories(data)
        console.log(data);
    }
    useEffect(() => {
        Categori()
    }, [])

    return (
        <div style={{ width: '80%', margin: 'auto' }}>

            <h2 className='heading'>PRODUCTS CATEGORIES</h2>
            <div style={{display:'flex',width:'100%'}}>

  

            {!categories ? "LODING..." :


                categories.map(categories => (

                    <Card sx={{ width:'400px',marginLeft:'10px' ,height:'150px'}}  key={categories.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={categories.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'18px',fontWeight:'bold'}}>
                                 {categories.name}
                                </Typography>

                            </CardContent>
                        </CardActionArea>

                    </Card>

                ))

            }
            </div>


            <section>
                <h3>PRODUCTS</h3>
                <Products />
            </section>

        </div>
    )
}

export default Home;