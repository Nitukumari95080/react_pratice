import React from 'react';

const Button = ({ title, onClick }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button
        onClick={onClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#4a4a4a',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
