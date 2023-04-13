import React, {useState} from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { filterCards, orderCards } from '../redux/action';

function Favorites({myFavorites, filterCards, orderCards, onClose}) {
   /* const myFavorites = useSelector(state=> state.myFavorites) */
   // ^^ lo mismo que mapStateToProps
   
   
   /* const dispatch = useDispatch(); */ 

   const [aux, setAux] = useState(false);


   const handleOrder = (e) => {
      if(e.target.value === 'def') {
         setAux(false);
         
      } else {
         setAux(true);
         orderCards(e.target.value)
      }
   }
   
   const handleFilter = (e) => {
         filterCards(e.target.value)
      }
   
   return (
      <div>
         <select name="" id="" onChange={handleOrder}>
            <option value="def">Choose...</option>
            <option value="A">Ascendente</option>
            <option value="B">Descendente</option>
         </select>
         <select name="" id="" onChange={handleFilter}>
            <option value="def">Choose</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            
         </select>
         {myFavorites.map(({id, name, status, species, gender, origin, image}) => (
            //e desestructurado
            <Card 
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
            )
         )}
         {/* {allCharacters.map(({id, name, status, species, gender, origin, image}) =>(
            //e desestructurado
            <Card 
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
            )
         )} */}
      </div>
   );
}

const mapStateToProps = (state) => { 
   return {
      myFavorites: state.myFavorites,
   }
 };

 const mapDispatchToProps = (dispatch) => {
   return {
      filterCards: (gender) => {
         dispatch(filterCards(gender))
      },
      orderCards: (order) => {
         dispatch(orderCards(order))
      }
   }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Favorites);