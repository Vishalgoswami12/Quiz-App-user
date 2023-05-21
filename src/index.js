import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Quiz from './Componenets/Quiz';
import QuizDisplay from "./Componenets/QuizDisplay";
import Result from './Componenets/Result';
import Home from './Componenets/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>  
    {/* <App />    */}
        <Routes>       
        <Route  path="/" element={<Home />} />
        <Route path='/AddQuestion' element={<Quiz/>}/>
        <Route path='/TakeQuiz!' element={<QuizDisplay />}/>  
        <Route path='/results' element={<Result />}/>  

       </Routes>
        
    </BrowserRouter>
  
  </React.StrictMode>
);


