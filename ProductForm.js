import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert('Fill in all fields');
    onSubmit({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">{initialData ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
