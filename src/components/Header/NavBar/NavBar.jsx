import "./NavBar.css";
import Button from "../../Button/Button";

/* eslint-disable react/prop-types */
const NavBar = ({toggle, setToggle}) => {
    return ( 
    <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
    <ul className="navbar-links">
      <a href="/" onClick={() => setToggle(false)} className="navbar-link active">
        Home
      </a>
      <a href="/" onClick={() => setToggle(false)}  className="navbar-link">
        Properties
      </a>
      <a href="/" onClick={() => setToggle(false)}  className="navbar-link">
        Property Details
      </a>
      <a href="/" onClick={() => setToggle(false)}  className="navbar-link">
        Contact Us
      </a>

      <Button text={"Scheduale a vist"} withIcon={true} styleClass={"navbar-link"} />

    </ul>
  </nav> 
  
);
}
 
export default NavBar;