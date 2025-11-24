import React from 'react';

// Компонент Input
export const Input = ({ placeholder, type = 'text', onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};
