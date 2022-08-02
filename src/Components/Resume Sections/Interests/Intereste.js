import React from 'react';

const Interests = ({ data }) => {
    const interests = data.interests;
    return (
        <div className='skills'>
            <p className='heading' >
                <span className='material-icons' >
                    extension
        </span>
        Interests
      </p>
            <hr  />
            <div className='skills-container'>
                {interests.map((item, index) => {
                    if (item.trim().length > 0) {
                        return (
                            <div
                                key={index}
                                className='item'
                            >
                                {item}
                            </div>
                        );
                    } else {
                        return false;
                    }
                })}
            </div>
        </div>
    );
};

export default Interests;      
     
