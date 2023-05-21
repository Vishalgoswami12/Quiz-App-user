import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";

// import {Link} from "react-router-dom"


const QuizDisplay = () => {
    const [data,setData] = useState(JSON.parse(localStorage.getItem("question")) || []);

    const navigate = useNavigate();
    const[score,setScore] = useState(0);
    const [isClicked,setIsClicked] = useState(false);
    const [selectedQuestion,setSelectedQuestion] = useState("");
    const[attempQuestion,setAttemQuestion] = useState(0)


const handleAnswer = (ans,i,ele) => {
     setAttemQuestion(state => state + 1)

    if(ans.isCorrect){
      let newScore = score + 1;
        setScore(newScore);
    }
    setIsClicked(i);
    setSelectedQuestion(ele.question);
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
            data.map((ele) => {
                return(
                    <>
                    <h2 className="ques-box">{ele?.question}</h2>
                    <div className="dir">
                        {
                            ele?.option?.map((el,i) => {
                                if(el?.title){
                                    return(
                                         <button className={isClicked === i  && selectedQuestion === ele.
                                         question  ? "correcdt" : ""} onClick={() => handleAnswer(el,i,ele)}>
                                             <p>{ele?.option[i].title}</p></button>
                                     )
                                }
                            })
                        }
                    </div>
                   
                    </>
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