import "./Headr.css";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import { IoMenu , IoClose } from "react-icons/io5";

const Header = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <section className="container">

    <header className="header">
        <h2 className="header__logo">
            villa
        </h2>

        <NavBar toggle={toggle} setToggle={setToggle} />

        <div onClick={() => setToggle((prev) => !prev)} className="header__burger">
        
        {toggle ? (
          <IoClose/>
        ) : (
          <IoMenu/>
        )}
        </div>

    
    </header>
    </section>

  )
}

export default Header
