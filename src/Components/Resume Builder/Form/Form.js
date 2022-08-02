import React, { useState , useEffect} from 'react'
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
  const handleSkillsUpdate = () => {
    var array = skills.split(',');
    setData({
      ...data,
      skills: array,
    });
  };


  const [skills, setSkills] = useState('');
  useEffect(() => {
    let temp = '';
    data.skills.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setSkills(temp);
  }, [data]);

  const [tools, setTools] = useState('');
  useEffect(() => {
    let temp = '';
    data.tools.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setTools(temp);
  }, [data]);
  
  const [interests, setInterests] = useState('');
  useEffect(() => {
    let temp = '';
    data.interests.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setInterests(temp);
  }, [data]);

  const handleToolsUpdate = () => {
    var array = tools.split(',');
    setData({
      ...data,
      tools: array,
    });
  };

  const addRow = (section, structure) => {
    let temp = section;
    temp.push(structure);
    setData({
      ...data,
      section: temp,
    });
  };

  // Remove Row
  const removeRow = (section, index) => {
    let temp = section;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      section: temp,
    });
  };

  const handleChange = (e, index, section, type) => {
    let temp = section;
    temp[index][type] = e.target.value;

    if (section === languages && type === 'level') {
      if (e.target.value > 5) {
        temp[index][type] = 5;
      } else if (e.target.value < 1) {
        temp[index][type] = 1;
      } else {
        temp[index][type] = e.target.value;
      }
    }

    setData({
      ...data,
      section: temp,
    });
  };
  const handleInterestsUpdate = () => {
    var array = interests.split(',');
    setData({
      ...data,
      interests: array,
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
        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Skills</h3>
            <button className='btn btn-sm btn-primary' onClick={handleSkillsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='5'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>
        </div>
        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Tools</h3>
            <button className='btn btn-sm btn-primary' onClick={handleToolsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='3'
            value={tools}
            onChange={(e) => setTools(e.target.value)}
          ></textarea>
        </div>
        <div className='section languages'>
          <hr />
          <h3 className='heading'>Languages</h3>
          {languages.map((item, index) => {
            return (
              <div className='row container-fluid' key={index}>
                <div className='ml-2 mr-2'>
                  <input
                    type='text'
                    name='language'
                    placeholder='Language'
                    value={item.language}
                    onChange={(e) => handleChange(e, index, languages, 'language')}
                  />
                  <input
                    type='number'
                    name='level'
                    placeholder='Level'
                    value={item.level}
                    onChange={(e) => handleChange(e, index, languages, 'level')}
                  />
                </div>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(languages, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(languages, { language: '', level: '' })}
          >
            Add
          </button>
        </div>
        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Interests</h3>
            <button className='btn btn-sm btn-primary' onClick={handleInterestsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='5'
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          ></textarea>
        </div>
        
      </div>
    </div>
  )
}

export default Form