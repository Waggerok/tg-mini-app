import React from 'react';

import airpods from '../Products/Airpods';
import ProductCard from './UI/ProductCard/ProductCard';

const AllProducts = () => {
    return (
        <>
            {
                airpods.map((item, index) => 
                    <ProductCard img={item.img} name={item.name} price={item.price} key={index}/>
                )
            }
        
        </>
    );
};

export default AllProducts;