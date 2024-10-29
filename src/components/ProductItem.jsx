import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './Stars';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <Link to={'/product/' + product.id}>
                <h3>{product.title}</h3>
            </Link>
            <RatingStars rating={product.rating.rate} />
        </div>
    );
};

export default ProductItem;
