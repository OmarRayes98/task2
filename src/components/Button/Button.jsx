/* eslint-disable react/prop-types */
import "./Button.css";
import { GrFormSchedule } from "react-icons/gr";

const Button = ({text,withIcon,styleClass}) => {
  return (
    <a className={`main-btn ${styleClass}`} style={{padding :withIcon ?"0px 20px 0px 0px" :"10px 20px" }}>
        <span>
        {text}
        </span>
        {
        withIcon ?
        <GrFormSchedule/>
        : null
        }
    </a>
  )
}

export default Button
