import React from 'react';

const Tools = ({ data}) => {
    const tools = data.tools;
    return (
        <div className='skills'>
            <p className='heading'>
                <span className='material-icons'>
                    build
        </span>
        Tools
      </p>
            <hr />
            <div className='skills-container'>
                {tools.map((item, index) => {
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

export default Tools;