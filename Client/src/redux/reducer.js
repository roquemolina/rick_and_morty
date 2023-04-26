import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*case ADD_FAV:
       return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload]
      }; */
      case ADD_FAV:
      return {
        ...state, 
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      };
      /* case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(el => el.id !== action.payload),
        myFavorites: state.myFavorites.filter(el => el.id !== action.payload)
      } */
      case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(el => el.id !== action.payload),
        myFavorites: state.myFavorites.filter(el => el.id !== action.payload)
      }
      case FILTER:
        if(action.payload === 'def') {
          return {
            ...state,
            myFavorites: [...state.allCharacters]
          }
        } else {
          return {
            ...state,
            myFavorites: state.allCharacters.filter(el => el.gender === action.payload)
          }
        }
      case ORDER:
        const newCha = [...state.allCharacters];
        if(action.payload === 'A') {
          return {
            ...state,
             myFavorites: state.allCharacters.toSorted((a, b) => a.id - b.id)
             /*
             -----myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)--- MALLL! MODIFICA EL ESTADO PORQUE NO DA UN
             NUEVO ARRAY!

            NO SE PUEDE USAR directamente el sort, o puedo usar el toSorted() xq me modificaEL STATE.ALLCHARACTER array, 
            en el filter de arriba se puede porque me da un nuevo array, el sort me modifica el 
            array del estado global. POR ESO NO LO USO DE UNA
            SI LO QUIERE USAR DE UNA PODRÍA USAR UN toSorted();*/
            /* myFavorites: newCha.sort((a, b) => a.id - b.id) */
          }
        } else {
          return {
            ...state,
            myFavorites: newCha.sort((a, b) => b.id - a.id)
          }
        }
      default:
        return {
          ...state
        }
  }
};

export default rootReducer;