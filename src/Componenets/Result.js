import { useLocation } from "react-router-dom";
import App from "../App";

const Result = () => {
    const location = useLocation();
    console.log(location)
    
    return(
        <>
        <App/>
        <div className="result-box"> 
        <h2 style={{textAlign:"center"}}>Your Score is {location.state.score} out of {location.state.data}</h2>
       </div>
        </>

    )
}

export default Result;