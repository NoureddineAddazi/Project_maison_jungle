import { plantList } from "./plantList"

export default function Categories(props){
    const categories = ["classique","extérieur","plante grasse"]
    const handleChange = (e)=>{
        console.log(e.target.value);
        props.handleChangeCateogry(e.target.value)
    }
    const reinitialiser = (nonCategory)=>{
        props.handleChangeCateogry(nonCategory)
    }
    return(
        <div className="category-container">
            Select a category : 
           <select onChange={(e)=>handleChange(e)}>
                <option >Select a category ... </option>
                {
                    categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))
                }
            </select>
            <button onClick={()=>reinitialiser("Select a category ...")}>Réinitialiser</button>
        </div>
    )
}