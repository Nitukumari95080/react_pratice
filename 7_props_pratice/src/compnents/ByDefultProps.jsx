import React from 'react';

const ByDefaultProps = ({ name = "Nitu", profession = "web developer" }) => {
  return (
    <div className='box'>
       <h1>{name}</h1>
       <h2>{profession}</h2>
    </div>
  );
};

export default ByDefaultProps;
