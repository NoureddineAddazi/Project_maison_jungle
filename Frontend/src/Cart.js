import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';

const Cart = ({ listPanier, setListPanier }) => {
  const total = listPanier.reduce((acc, item) => acc + item.plant.price * item.quantity, 0);
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleCheckoutSubmit = async (checkoutData) => {
    try {
      console.log('Données du formulaire à envoyer au backend :', {
        nom: checkoutData.nom,
        email: checkoutData.email,
        telephone: checkoutData.telephone,
        adresse: checkoutData.adresse,
        listPanier,
      });

      const response = await axios.post('http://localhost:4000/checkout', {
        nom: checkoutData.nom,
        email: checkoutData.email,
        telephone: checkoutData.telephone,
        adresse: checkoutData.adresse,
        listPanier,
      });

      setListPanier([]);

      console.log('Réponse du serveur:', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données au backend :', error);
    }
  };

  return (
    <aside className="cart">
      <h2>Panier</h2>
      <ul>
        {listPanier.map((plant) => (
          <li key={plant.plant.id}>
            {plant.quantity} {plant.plant.name} {plant.plant.price}$
          </li>
        ))}
      </ul>
      <h2>Total: {total}$</h2>
      {!isCheckout ? (
        <button onClick={handleCheckout}>Valider le Panier</button>
      ) : (
        <CheckoutForm onSubmit={handleCheckoutSubmit} />
      )}
    </aside>
  );
};

export default Cart;
