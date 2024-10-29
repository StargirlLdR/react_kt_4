import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoumdImg from '../assets/NotFoundImg.gif'

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="content">
            <img width={400} src={NotFoumdImg} alt='404'/>
            <button className="notFoundB" onClick={() => navigate('/products')}>Go to Products</button>
        </div>
    );
};

export default NotFoundPage;
