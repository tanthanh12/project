import "./Product-add.css";
import React, { useContext, useState } from "react";
import { Button, ButtonGroup, Col, FormGroup, Input, Row } from "reactstrap";
import { AppContext } from "../../AppContext";

export default function Product_add(props) {
  const { removeItem, updateQty, cart } = useContext(AppContext);
  const { product } = props;
  const [qty, setQty] = useState(product.qty||1);

  const increment = () => {
    const newQty = qty + 1;
    setQty(newQty);
    updateQty(product.id, newQty);
    saveCartToLocalStorage();
  };

  const decrement = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      updateQty(product.id, newQty);
      saveCartToLocalStorage();
    }
  };
  const saveCartToLocalStorage = () => {
    localStorage.setItem("cart_list", JSON.stringify(cart));
  };
  const handleRemove = () => {
    removeItem(product.id);
  };

  return (
    <div className="detail">
      <Row>
        <Col md="6" xs="6" className="product-info">
          <FormGroup row className="text-center">
            <Col>
              <FormGroup check>
                <Input id="checkbox" type="checkbox" />
                <img src={product.avatar}  />
              </FormGroup>
            </Col>
          </FormGroup>
          <div className="review">
            <h6>{product.name}</h6>
            <p>Màu: {product.color}</p>
            {product.configuration && <p>Cấu hình: {product.configuration}</p>}
          </div>
        </Col>
        <Col md="2" xs="3">
          <h6>{product.price}</h6>
        </Col>
        <Col md="2" xs="2">
          <div className="count">
            <ButtonGroup>
              <Button onClick={decrement}><span className="plus">-</span></Button>
              <span className="qty">{product.qty}</span>
              <Button onClick={increment}><span className="minus">+</span></Button>
            </ButtonGroup>
          </div>
        </Col>
        <Col md="1" xs="1">
          <div className="delete">
            <Button onClick={handleRemove}>
              <i className="fa-solid fa-trash-can"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
