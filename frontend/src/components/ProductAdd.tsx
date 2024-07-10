// import React, { useState } from 'react';
// import axios from 'axios';
// import './ProductAdd.css';
// interface ProductAddProps {
//   products: Product[];
//   setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description?: string;
// }

// const ProductAdd: React.FC<ProductAddProps> = ({ products, setProducts }) => {
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: 0,
//     description: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewProduct(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/product', newProduct)
//       .then(response => {
//         setProducts([...products, response.data]);
//         setNewProduct({ name: '', price: 0, description: '' });
//       })
//       .catch(error => console.error('Error creating product:', error));
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//         <h1>Add Product</h1>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={newProduct.name}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={newProduct.price}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <input
//           type="text"
//           id="description"
//           name="description"
//           value={newProduct.description}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default ProductAdd;
import React, { useState } from 'react';
import axios from 'axios';
import './ProductAdd.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface ProductAddProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  togglePopup: () => void;
}

const ProductAdd: React.FC<ProductAddProps> = ({ products, setProducts, togglePopup }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:8000/product', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setNewProduct({ name: '', price: 0, description: '' });
        togglePopup();
      })
      .catch(error => console.error('Error creating product:', error));
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={togglePopup}>X</button>
        <form onSubmit={handleFormSubmit}>
          <h1>Add Product</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
