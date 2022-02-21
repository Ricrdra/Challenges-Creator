import React from 'react';

const Button = ({children}) => {
    return (
        <div className="bg-primary-medium rounded-md w-full">
            {children}
        </div>
    );
};

export default Button;
