import React, { useState, useEffect } from 'react';

function Products({ onLogout }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch products on load
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // Handle form submit (add or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const productData = { name, price };

    if (editingId) {
      fetch(`http://localhost:3001/products/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      })
        .then(res => res.json())
        .then(updatedProduct => {
          setProducts(products.map(p => p.id === editingId ? updatedProduct : p));
          resetForm();
        });
    } else {
      fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      })
        .then(res => res.json())
        .then(newProduct => {
          setProducts([...products, newProduct]);
          resetForm();
        });
    }
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setEditingId(null);
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter(p => p.id !== id));
      });
  };

  return (
    <div className="products-container">
      <button className="logout-btn" onClick={onLogout}>Logout</button>
      <h2>Products</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">
          {editingId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
