
"use client"
import React, { useState } from 'react';
import { Radio, Row, Col } from 'antd';
import './style.scss'; 

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState('ironSteel');

  const handleRadioChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <div className="product-selector">
      <Row justify="center" className="radio-container">
        <Col>
          <Radio.Group onChange={handleRadioChange} value={selectedProduct} className="radio-group">
            <Radio.Button value="ironSteel">Iron & Steel Making</Radio.Button>
            <Radio.Button value="foundry">Foundry Equipment</Radio.Button>
            <Radio.Button value="induction">Induction Heating & Hardening</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <div className="product-content">
        {selectedProduct === 'ironSteel' && (
          <div className="content">
            <h2>Electrotherm has supplied more than 6500 Induction melting furnaces and completed over 40 turnkey projects.</h2>
            <button className="explore-btn">Explore our iron and steel making products</button>
          </div>
        )}
        {selectedProduct === 'foundry' && (
          <div className="content">
            <h2>Foundry Equipment content goes here.</h2>
          </div>
        )}
        {selectedProduct === 'induction' && (
          <div className="content">
            <h2>Induction Heating & Hardening content goes here.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSelector;
