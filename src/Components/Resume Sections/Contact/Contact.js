import React from 'react'
import "./Contact.css"

function Contact({data}) {
  const { username , location, phone, email, linkedin, github  } = data.contact;
  return (
    <div>     
    {/* <div className='photo-container'>
      <img src={photoUrl.trim().length !== 0 ? photoUrl : Default} alt='' />
    </div> */}
    <>
    {username && (
      <div className='name'>
        {username}
      </div>
    )}
    </>
    <div className='contact'>
      {location && (
        <div className='item'>
          <p className='material-icons icon'>
            location_on
          </p>
          <p className='text'>{location}</p>
        </div>
      )}
      {phone && (
        <div className='item'>
          <p className='material-icons icon'>
            phone
          </p>
          <p className='text'>
            <a href={'tel:' + phone}>{phone}</a>
          </p>
        </div>
      )}
      {email && (
        <div className='item'>
          <p className='material-icons icon'>
            email
          </p>
          <p className='text'>
            <a href={'mailto:' + email}>{email}</a>
          </p>
        </div>
      )}
      {linkedin && (
        <div className='item'>
          <i className='fab fa-linkedin icon'></i>
          <p className='text'>
            <a href={'https://www.' + linkedin} target='_blank' rel='noopener noreferrer'>
              {linkedin}
            </a>
          </p>
        </div>
      )}
      {github && (
        <div className='item'>
          <i className='fab fa-github icon'></i>
          <p className='text'>
            <a href={'https://www.' + github} target='_blank' rel='noopener noreferrer'>
              {github}
            </a>
          </p>
        </div>
      )}
    </div>
    </div>
  )
}

export default Contact