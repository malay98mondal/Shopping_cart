// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import ProductList from './components/ProductList';
// import ProductAdd from './components/ProductAdd';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description?: string;
// }

// const App: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/product')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Shopping Cart</h1>
//       <ProductAdd products={products} setProducts={setProducts} />
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/product')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      {showPopup && (
        <ProductAdd products={products} setProducts={setProducts} togglePopup={togglePopup} />
      )}
      <ProductList products={products} setProducts={setProducts} togglePopup={togglePopup} />
    </div>
  );
};

export default App;
