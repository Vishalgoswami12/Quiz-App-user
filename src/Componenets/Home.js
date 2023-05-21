import React from "react"
import App from "../App";

function Home (){
    return (
        <>
        <App/>
        <h2 style={{textAlign:"center", fontSize:"30px", color:"white",textDecoration:"underLine"}}>Lets Play a Quiz</h2>
        <figure style={{textAlign:"center"}}>
            <img src={require("../Assets/image1.jpg")} alt="image" width="50%" />
        </figure>
        </>
    )
}
export default Home;