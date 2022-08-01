import React from 'react'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./CardButton.css"
import { Link } from "react-router-dom";

function CardButton() {
  return (
    <div id='card__button' >
      {/* <ArrowRightAltIcon className = "rightArrow__icon" /> */}
      <Link to="/resume-builder"> <button className='template__card__button' >View Now </button> </Link>
    </div>
  )
}

export default CardButton