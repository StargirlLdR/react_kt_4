import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="products-page">
            <h1>Product List</h1>
            <div className="products-grid">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
