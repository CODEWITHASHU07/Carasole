import React from 'react'
import "./Carasole.css"
import Card from './Card'
import { useEffect } from 'react'
import { useState } from 'react';
function Carasole(){
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);

        return () => clearInterval(intervalId);  
    }, []);
    let Arr=new Array(100).fill(null);
    const[Count,setCount]=useState(0);
 return (
<>
    <div id='container'>
   
    <div id='Scroller'>
    {
       Arr.map((_, index) => {
        let i = index % 6;
        if (i === 0) i = 1;
        
        return (
            <Card Img={`https://dev.rubicontutors.com/html/assets/images/s${i}.jpg`} key={index} count={Count} />
        );
    })
    }
      </div>
      <div style={{font:'700',color:'white',fontSize:'2rem'}}>Hii By Carasole</div>
    <div id='Scroller'>
    {

         Arr.map((_, index) => {
        let i = index % 8;
        if (i === 0) i = 1;
        
        return (
            <Card Img={`https://dev.rubicontutors.com/html/assets/images/a${i}.jpg`} key={index} count={Count} />
        );
    })
    }
      </div>
  
    </div>
</>
)
}
export default Carasole

// First Scroller IMage
// https://dev.rubicontutors.com/html/assets/images/s5.jpg
// https://dev.rubicontutors.com/html/assets/images/a7.jpg