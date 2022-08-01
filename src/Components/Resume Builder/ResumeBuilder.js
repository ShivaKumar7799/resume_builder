import React, { useState, useEffect } from 'react'
import Form from './Form/Form'
import Resume from './Resume/Resume'
import "./ResumeBuilder.css"
import jsonData from '../../Json Data/data.json';

function ResumeBuilder() {
  const [data, setData] = useState(jsonData);
  // useEffect( ()  => {
  //   setData(jsonData)
  // } , []);

  return (
    <div className='resume__container' >
      <div className='left__content' >
        <Form data = {data} setData = {setData}  />
      </div>
      <div className='right__content' >
        <Resume data={data} />
      </div>
    </div>
  )
}

export default ResumeBuilder