// import React, { useState } from "react";

import { useState } from "react";

import App from "../App";

function Quiz () {

    

const[active,setActive] = useState([1,1]);

const[addOption,setAddOption] = useState(true);

const [questionData,setquestionData] = useState(JSON.parse(localStorage.getItem("question")) || [] );

const [correctAnsIndex,setCorrectAnsIndex] = useState(null);


console.log(active)
const handleButton = () => {
    if(active.length >= 3){
        setAddOption(false);
    }
    if(active.length > 3) {
        return;
    }
    else{
        let newArr = [...active];
        newArr.push("");
        setActive(newArr);
    }
}

const handleSelect = (e) => {
    setCorrectAnsIndex(e.target.value);
};




const submitQuestion = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    let data = Object.fromEntries(formData.entries());

    let obj = {
        id:Date.now(),

        question:data.question,

        option:  [1,2,3,4].reduce((acc,el) => {
            if(data[`option${el}`]){
                 acc.push({ title:data[`option${el}`], id:el, isCorrect: data.select == el.toString()})
            }
            return acc;
        },[])
    }

    let newArr = [...questionData];

    newArr.push(obj);
    // console.log(newArr)
    alert("Question added Successfully!!😎")

    localStorage.setItem("question",JSON.stringify(newArr));


    document.getElementById("myform").reset();
}


const handleDelete = (index) => {
        active.splice(index,1)
        setActive([...active])

        if(active.length <= 4){
            setAddOption(true)
        }
}

 return(
         <>
        <App/>
        <div style={{display:"flex", justifyContent:"center" }}>

        <div className="box-style">
            <label>Questions</label>

            <form  id="myform" onSubmit = {submitQuestion} >

            <input required  name="question" className="input-style"  type="text" placeholder="Add Question...." />
            {
                active.map((_ ,i)=> {
                    return (
                        <div key={i} className={`option ${i > 1 ? 'flex' : ""} `}>
                        <input required  name={"option"+(i+1)}  placeholder={"Option" + (i+1)}/>
                        {i >  1 ? <button onClick={() => handleDelete(i)}>X</button> : ""}
                        </div>
                    )
                })
            }

            { addOption && 
            
            <button style={{textAlign:"center" , color:"red",marginTop:"10px",padding:"6px"}} onClick={ handleButton}> Add More Option If You Need</button>
           }

            <div style={{display:"flex"}}>
               <p className="label"> Choose Correct Answer</p> 

            <select className="select" name="select" onChange={ handleSelect }>
            {
                active.map((_ ,i) => {
                    return(
                        <option key={i} className="correct" value={i}>{i+1}</option> 
                    )
                })
            }
            </select>
            </div>
            <div style={{textAlign:"center"}}>
            <input type="submit" className="option submit" value="submit" />
            </div>
            </form>


        
        </div>
        </div>
        
        </>
    )

}


export default Quiz;