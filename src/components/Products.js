import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/Cartslice';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularStatic from './Loding';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
 

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

function Products() {

    const [open, setOpen] = React.useState(false);


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const dispatch = useDispatch()
    const [Products, setProduct] = useState();
    const fetchProduct = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        console.log(data)
        setProduct(data)


    }
    useEffect(() => {
        fetchProduct()
    }, [])

    const handleAdd = (Products) => {
        dispatch(add(Products))
        handleClick(true)


    }
    return (
        <div className='productsWrapper'>
            {!Products ? <CircularStatic /> :
                Products.map(Products => (
                    <Card sx={{ maxWidth: 345 }} key={Products.id}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={Products.images}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {Products.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${Products.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleAdd(Products)}     >  Add to cart</Button>

                        </CardActions>
                    </Card>
                ))

            }









            <Stack spacing={2} sx={{ width: '100%' }}>
               
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    PRODUCTS ADD
                    </Alert>
                </Snackbar>
               
            </Stack>


        </div>
    )
}

export default Products