import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Form.css"

function Form({data,setData}) {
  let { username, photoUrl, location, phone, email, linkedin, github } = data.contact;
  let languages = data.languages;
  let references = data.references;
  let objective = data.objective;
  let education = data.education;
  let experience = data.experience;
  let certifications = data.certifications;
  let projects = data.projects;
  let projects_link = data.projects_link;
  let workshops = data.workshops;
  let activities = data.activities;

  const handleContactChange = (e) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <div>
        <Link to="/" ><button> Back to Home Page</button></Link>
      </div>
      <div className='form' >
      <div className='section contact'>
          <hr />
          <h3 className='heading'>Contact</h3>
          <p className='label'>Name</p>
          {/* <span>Please use your full name</span> */}
          <input type='text' name='username' value={username} onChange={handleContactChange} />
          <p className='label'>Photo URL</p>
          <input type='text' name='photoUrl' value={photoUrl} onChange={handleContactChange} />
          <p className='label'>Location</p>
          <input type='text' name='location' value={location} onChange={handleContactChange} />
          <p className='label'>Phone</p>
          <input type='text' name='phone' value={phone} onChange={handleContactChange} />
          <p className='label'>Email</p>
          <input type='text' name='email' value={email} onChange={handleContactChange} />
          <p className='label'>LinkedIn</p>
          <input type='text' name='linkedin' value={linkedin} onChange={handleContactChange} />
          <p className='label'>Github</p>
          <input type='text' name='github' value={github} onChange={handleContactChange} />
        </div>
      </div>
    </div>
  )
}

export default Form