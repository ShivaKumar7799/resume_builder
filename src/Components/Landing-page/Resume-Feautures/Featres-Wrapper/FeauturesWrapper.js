import React from 'react'
import "./FeauturesWrapper.css"

function FeauturesWrapper(props) {
  return (
    <div  className='feautureWrapper__container'>
      <div className='feautureWrapper_icon' >
        <img src= {props.image} alt= {props.alt} />
      </div>
      <div>
        <h2 className='feautureWrapper__title' > {props.title} </h2>
        <p className='feautureWrapper__text' > {props.text} </p>
      </div>
    </div>
  )
}

export default FeauturesWrapper