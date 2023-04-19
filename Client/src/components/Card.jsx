import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/action';

function Card({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, allCharacters}) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      for (let index = 0; index < allCharacters.length; index++) {
         if(allCharacters[index].id === id) {
            setIsFav(true);
         }
      }
      /* myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      }); */

   }, [allCharacters]);
   
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image})
      }
   }
   const handleClose = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      }
   }

   return (
      <div>
         {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            ) }
         <button onClick={() => {
            onClose(id)
            handleClose()}}>X</button>
         <Link to={`/detail/${id}`}>
         <h3 className="card-name">{name}</h3>
         </Link>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}
const mapStateToProps = (state) => { 
   return {
      myFavorites: state.myFavorites,
      allCharacters: state.allCharacters
   }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Card);