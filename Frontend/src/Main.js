import React, { useState } from 'react';
import ShopingList from './ShopingList';
import Cart from './Cart';

export default function Main() {
  const [listPanier, setListPanier] = useState([]);

  const addToPanier = (plant) => {
    const existingItem = listPanier.find((item) => item.plant.id === plant.id);

    if (existingItem) {
      setListPanier((prevList) =>
        prevList.map((item) =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setListPanier((prevList) => [...prevList, { plant, quantity: 1 }]);
    }
  };

  return (
    <body className="body-container">
      <Cart listPanier={listPanier} />
      <ShopingList addToPanier={addToPanier} />
    </body>
  );
}
