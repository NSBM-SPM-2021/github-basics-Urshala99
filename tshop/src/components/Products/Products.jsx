import React from 'react';
import { Grid }  from '@material-ui/core';

import Product from './Product/Product';
const products = [
    {id: 1, name: 'Tie Die #1', description: 'Viscose Polyester Tie Dye T Shirt', price: '$10', image:'https://sc04.alicdn.com/kf/H8ccf2385264a4602abfc20666a1d5c98l.jpg' },
    {id: 2, name: 'Tie Die #2', description: 'Viscose Polyester Tie Dye T Shirt', price: '$10', image: 'https://sc04.alicdn.com/kf/Haed737cf6cd4459eb7c464b2ea64ea49V.jpg' },
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
        ))}
    </Grid>
    </main>
    );
}

export default Products;