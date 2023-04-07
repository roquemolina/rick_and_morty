import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Detail() {
  //let params = useParams();
  //console.log(params);
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [detailId]);

  return ( 
    <div>
      <h3>Detail!</h3>
      {character.name
        ? <h2>{character.name}</h2>
        : <h2>Loading...</h2>
      }
      {character.status
        ? <h2>{character.status}</h2>
        : <h2>Loading...</h2>
      }
      {character.species
        ? <h2>{character.species}</h2>
        : <h2>Loading...</h2>
      }
      {character.gender
        ? <h2>{character.gender}</h2>
        : <h2>Loading...</h2>
      }
    </div>
   );
}

export default Detail;