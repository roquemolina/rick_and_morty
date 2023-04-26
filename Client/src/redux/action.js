import axios from 'axios';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

/* export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character
  }
} */
export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
     let {data} = await axios.post(endpoint, character);
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     /* axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     }); */
  
    };
};
/* export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id
  }
} */
export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
     
    /* esto se hace con el Ctrl + . del quick fix q me desabilita ESlisnt! */
    // eslint-disable-next-line no-unused-vars
    let {data} = await axios.delete(endpoint)
     return dispatch({
      type: REMOVE_FAV,
      payload: id,
     });
    /* axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: id,
     });
     }); */

  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}