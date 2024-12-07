import React from 'react';
import Button from './Button';

const ButtonPage = () => {
  const handle1 = () => {
    alert('Click me');
  };

  return (
    <>
      <Button title="Click me" onClick={handle1} />
    </>
  );
};

export default ButtonPage;
