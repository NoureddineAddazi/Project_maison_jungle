import CareScale from "./CareScale";


export default function PlantItem(props){
    
    return(
        <div className="plant-list" key={props.plant.id}>
            <img src={props.plant.cover}/>
            <p>{props.plant.name} <span>{props.plant.price}$</span></p>
            <CareScale
                light={props.plant.light}
                water={props.plant.water}/>
            <button onClick={()=>props.addToPanier(props.plant)}>Ajouter</button>
        </div>
    )
}