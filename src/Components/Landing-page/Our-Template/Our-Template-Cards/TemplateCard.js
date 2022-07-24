import React from 'react'
import CardButton from './Template-Card-Button/CardButton'
import './TemplateCard.css'

function TemplateCard(props) {
  return (
    <div id='template__card__container' >
      <img className='template__card__image' src={props.image} alt = {props.alt} />
      <div className='template__card__content' >
        <h5 className='template__card__title' >{props.title}</h5>
        <CardButton />
      </div>
    </div>
  )
}

export default TemplateCard