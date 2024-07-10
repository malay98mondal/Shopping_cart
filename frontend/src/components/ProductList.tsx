// //  export default ProductList;
// import './ProductAdd.css';


// import React, { useState } from 'react';
// import axios from 'axios';
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description?: string;
// }

// interface ProductListProps {
//   products: Product[];
// }

// const ProductList: React.FC<ProductListProps> = ({ products }) => {
//   return (
//     <ul>
//       <h1>Product_List</h1>
//       {products.map(product => (
//         <li key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <p>{product.description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ProductList;



import React from 'react';
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface ProductListProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  togglePopup: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, togglePopup }) => {
  return (
    <div className="product-list-container">
      <div className="header">
        <h1>Product List</h1>
        <button className="add-product-button" onClick={togglePopup}>
          Add Product
        </button>
      </div>
    
      <ul>
        <li className="product-header">
          <span>Product ID</span>
          <span>Name</span>
          <span>Price</span>
          <span>Description</span>
        </li>
        <div className='ProductItemList'>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <span>{product.id}</span>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <span>{product.description}</span>
          </li>
          
        ))}
        </div>
      </ul>
      </div>
    
  );
};

export default ProductList;
