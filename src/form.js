

import React, {useState} from 'react';
import {Star} from './Stars.js';


export function Form(){

    const [inputName, setInputName]= useState('');
    const [inputReview,setInputReview]= useState([]);

    const handleInputNameChange = (e) => {
        setInputName(e.target.value);
      };

    const handleInputReviewChange = (e) => {
        setInputReview(e.target.value);
      };

    const Submit= (e) => {
        e.preventDefault();
        if(!inputName.trim() || !inputReview.trim()) return;
        setInputReview([...inputReview,inputName]);
        setInputName('')
    };

    return( 
    <div>
        <form onSubmit={Submit}>
            <Star/>
            <label>
             Name:
                <input
                    type='text'
                    value={inputName}
                    onChange={handleInputNameChange}                
                />
            </label>
            <br/>
            <label>
             Review:
                <input
                    type='text'
                    value={inputReview}
                    onChange={handleInputReviewChange}
                />
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {inputReview.map((setInputReview,index)=>(
            <li key={index}>
                <Star/> <br/> {inputName} <br/> {inputReview}
            </li>
            ))}
        </ul>
    </div>
    );
};
export default Form;

