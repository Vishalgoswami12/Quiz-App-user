import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";



const QuizDisplay = () => {
    const [data,setData] = useState(JSON.parse(localStorage.getItem("question")) || []);

    const navigate = useNavigate();
    const[score,setScore] = useState(0);
    const [selectedOptions,setSelectedOptios] = useState(Array(data.length).fill(null));
    const[attempQuestion,setAttemQuestion] = useState(0)


const handleAnswer = (ans,questionIndex,optionIndex) => {
     setAttemQuestion(state => state + 1)

    if(ans.isCorrect){
      let newScore = score + 1;
        setScore(newScore);
    }
    setSelectedOptios((prevSelectedOptions) => {
        const newSelectedOptions = [...prevSelectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        return newSelectedOptions;
    });
}

const clearData = () => {
    localStorage.clear();
    setData([]);
}


    return(
        <>
        {console.log(data)}
        <App/>
        <div className="quiz"> 
        { data.length ?
            data.map((ele,questionIndex) => {
                return(
                    <div key={questionIndex}>
                    <h2 className="ques-box">{ele?.question}</h2>
                    <div className="dir">
                        {
                            ele?.option?.map((el,optionIndex) => {
                                if(el?.title){
                                    return(
                                         <button key={optionIndex} className={selectedOptions[questionIndex] ===optionIndex  ? "correcdt" : ""} onClick={() => handleAnswer(el,questionIndex,optionIndex)}>
                                             <p>{ele?.option[optionIndex].title}</p></button>
                                     )
                                }
                            })
                        }
                    </div>
                   
                    </div>
                )
            }): <h2 style={{textAlign:"center"}}>Please Addd Questions</h2>
        }

        </div>
        <div className="center">

            {
                data.length ? data.length === attempQuestion &&
                <button className="btn" onClick={() => {
                        navigate("/results",{state: {score: score, data: data.length}})
                     }}>Show Result</button> :""
            }
                   
                
        {
            data.length ? <button  className="btn"  onClick={ clearData }>Clear Question</button> : ""
        }
            
        </div>
       
        </>
      
    
        
    )
}


export default QuizDisplay;