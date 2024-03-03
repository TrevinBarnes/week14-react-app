

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

    const handleSubmit= (e) => {
        e.preventDefault();
        if(!inputName.trim() || !inputReview.trim()) return;
        setInputReview([...inputReview,{ name: inputName, review: inputReview}]);
        setInputName('')
    };

    return( 
        <div>
            <form onSubmit={handleSubmit}>
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
                {inputReview.map((review,index)=>(
                <li key={index}>
                    <Star/> <br/> {review.name} <br/> {review.review}
                </li>
                ))}
            </ul>
        </div>
    );
};
export default Form;

