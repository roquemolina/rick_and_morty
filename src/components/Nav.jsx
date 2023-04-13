import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch,}) => {
  return ( 
    <div>
      <SearchBar
    onSearch={onSearch}
    />
    <NavLink
      to="/home"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <button>Home</button>
    </NavLink>
    <NavLink
      to="/favorites"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <button>Favorites</button>
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <button>About</button>
    </NavLink>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <button onClick={console.log()}>Log Out</button>
    </NavLink>
    </div>
    
   );
}
 
export default Nav;