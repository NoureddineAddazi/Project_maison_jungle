import React, { useState } from 'react';
import axios from 'axios';

export default function CheckoutForm({ onSubmit }) {
  
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:4000/checkout', formData);
      
      
      onSubmit(response.data);
    } catch (error) {
      
      console.error('Erreur lors de l\'envoi des données au backend :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />

      
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      
      <label htmlFor="telephone">Téléphone :</label>
      <input
        type="tel"
        id="telephone"
        name="telephone"
        value={formData.telephone}
        onChange={handleChange}
        required
      />

      
      <label htmlFor="adresse">Adresse :</label>
      <textarea
        id="adresse"
        name="adresse"
        value={formData.adresse}
        onChange={handleChange}
        required
      />

      
      <button type="submit">Valider le panier</button>
    </form>
  );
}
