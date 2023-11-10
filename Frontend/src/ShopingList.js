import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantItem from "./PlantItem";

export default function ShopingList({ addToPanier }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/plantList')
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des plantes :', error);
      });
  }, []);

  return (
    <div className="planlist-container">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} addToPanier={addToPanier} />
      ))}
    </div>
  );
}
