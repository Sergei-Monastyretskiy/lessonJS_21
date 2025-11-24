import React from 'react';

// Компонент Button
export const Button = ({ text, type = 'button', onClick }) => {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    );
};
