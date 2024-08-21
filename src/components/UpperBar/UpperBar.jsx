import "./UpperBar.css";
import  {FaMap ,FaFacebook ,FaTwitter, FaLinkedin,FaInstagram}  from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const UpperBar = () => {


  return (
    <section className="upperbar">
    <div className="container">
      <div className="upperbar__row">

        <div className="upperbar__info">
        <div className="upperbar__content">
        <FaMap/>
        <span>info@company.com</span>
        </div>


        <div className="upperbar__content">
        <MdEmail/>
        <span>Sunny Icles Beach,FL33160</span>
        </div>


        </div>

        <div className="upperbar__icons">
            <FaFacebook />
            <FaTwitter/>
            <FaLinkedin/>
            <FaInstagram/>
        </div>

      </div>
    </div>
    </section>
  )
}

export default UpperBar;
