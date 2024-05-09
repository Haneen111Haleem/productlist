import React, { useState } from "react";

const Items = (props) => {
  const { items, del } = props;
  let length = items.length;

  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <ProductQuantity />
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );

  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="count">
      <p>Count: {quantity}</p>
      <button className="b1" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
      <button
        className="b1"
        disabled={quantity === 0}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Items;
