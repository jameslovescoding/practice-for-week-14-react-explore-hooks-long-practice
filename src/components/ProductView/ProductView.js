import React from 'react';
import { useState, useEffect } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable

  const [sideOpen, setSideOpen] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggleSideOpen = () => {

    setSideOpen(!sideOpen);
  };

  useEffect(() => {
    if (selectedItem && !sideOpen) {
      setSideOpen(true);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (!sideOpen) {
      setSelectedItem(null);
    }
  }, [sideOpen]);


  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => setSelectedItem(item)}
              isSelected={selectedItem && selectedItem.id === item.id}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle" onClick={handleToggleSideOpen}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedItem} />
      </div>
    </div>
  );
}

export default ProductView;