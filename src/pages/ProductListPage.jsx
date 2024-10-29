import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Stars from '../components/Stars';


const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProduct(data))
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Stars rating={product.rating.rate} />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default ProductDetailPage;
