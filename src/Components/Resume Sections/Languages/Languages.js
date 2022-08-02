import React from 'react';

const Languages = ({ data}) => {
  const languages = data.languages;
  const loop = [1, 2, 3, 4, 5];

  return (
    <div className='languages'>
      <p className='heading' >
        <span className='material-icons' >
          language
        </span>
        Languages
      </p>
      <hr />
      <div className='languages-container'>
        {languages.map((item, index) => {
          return (
            <div key={index} className='item'>
              <div className='language'>{item.language}</div>
              <div className='level'>
                {loop.map((num, i) => {
                  if (num <= item.level) {
                    return (
                      <div
                        key={i}
                        className='material-icons star'
                      >
                        star
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={i}
                        className='material-icons star'
                      >
                        star_outline
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;