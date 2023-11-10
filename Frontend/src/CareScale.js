import sun from "./assets/sun.svg"
import water from "./assets/water.svg"

export default function CareScale(props){
    console.log("light number "+props.light)
    return(
        <div className="care-scale">
            {[...Array(props.light)].map((index) => (
                <img key={index} src={sun} alt="sun" />
            ))}
            <br />
            {[...Array(props.water)].map((index) => (
                <img key={index} src={water} alt="water" />
            ))}
        </div>
    )
}