import React from 'react';
import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);

   function repetido (objs, num) {
      let includes = true;
      if(objs.length === 0) return true;
      objs.forEach( el => {
         console.log(el.id, Number(num))
         if (el.id === Number(num)){
            includes = false;
         };
      });
      return includes;
   }
   function onSearch(id) {
      if(!repetido(characters, id)) return window.alert('¡Ya hay personajes con este ID!!!!!'); 
      if(id > 827 || id < 1) return window.alert('¡No hay personajes con este ID!!!!!');
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   function onClose(id) {
      let newChar = characters.filter (el => el.id !== id);
      setCharacters(newChar);
   }

   return (
      <div className='App'>
         <Nav 
            onSearch={onSearch}

         />
         <Cards
            characters={characters}
            onClose={onClose}
         />

      </div>
   );
}

export default App;
