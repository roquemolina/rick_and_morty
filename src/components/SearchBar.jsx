import React, { useState } from 'react';

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
 }
 

export default function SearchBar(props) {
   const [id, setId] = useState('');
   
   function handleChange (event){
      setId(event.target.value)
   }
            

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
         <button onClick={() => props.onSearch(getRandomIntInclusive(1, 826))}>Agregar random</button>
      
      </div>
   );
}
