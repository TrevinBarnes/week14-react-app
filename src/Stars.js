import empty from './assets/emptyStar.svg';  
import filled from "./assets/filledStar.svg";
import React, { useState } from 'react';

export function Star() {
    const[selection,setselection]=useState(0);

    return( <div>
         {[1,2,3,4,5].map((i)=>{
        return (
        <img src={(i<= selection? filled : empty)} 
        alt={i<=selection ? 'filledStar':'emptyStar'} 
        onClick={()=>setselection(i)}/>
        )
    })}
    </div>
    );
}
export default Star;