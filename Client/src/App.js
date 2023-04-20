import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Cards from './views/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail';
import Error404 from './views/Error404';
import Form from './views/Form';
import Favorites from './views/Favorites';

/* const URL_BASE = 'https://be-a-rym.up.railway.app/api/character',
API_KEY = '63c4e80e9996.753191aab329ade011ee'; */

function App() {
   const [characters, setCharacters] = useState([]);
   let location = useLocation();
   //console.log(location)
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const EMAIL = 'ee@ee.ee',
   PASSWORD = '12345q';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else {
         window.alert('usuario o contra inco')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   //repetido lo podría vvvvv  hacer con un .find()
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
      if(id > 826 || id < 1) return window.alert('¡No hay personajes con este ID!!!!!');
      /* axios(`${URL_BASE}/${id}?key=${API_KEY}`) */
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch((err) => {
         console.log('hubo un error');
      });
   };

   function onClose(id) {
      let newChar = characters.filter (el => el.id !== id);
      setCharacters(newChar);
   }

   function logout () {
      setAccess(false);

   }
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
         
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
            <Route path="/detail/:detailId" element={<Detail/>}/>
            {/* acá arriba ^^^^va el :id xq el id lo pasa el elemento Detail x medio del useParam */}
            <Route path="*" element={<Error404/>}/>
            {/* el * acá ^^^^ arriba es como decir cualquiera en RegExp */}
         </Routes>

         {/* <Cards
            characters={characters}
            onClose={onClose}
         /> */}

      </div>
   );
}

export default App;