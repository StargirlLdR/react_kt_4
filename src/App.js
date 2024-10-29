import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductListPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  
  const location = useLocation()
  console.log(location)

    return (
          <Routes>
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
    );
}

export default App;
