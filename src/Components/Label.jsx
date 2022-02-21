import React from 'react';

const Label = ({name, extraClass}) => {
    const splitName = name.split('_').join(' ');
    const capName = splitName.charAt(0).toUpperCase() + splitName.slice(1);
    return (
        <label htmlFor={name} className={`text-left select-none w-1/4 ${extraClass ?? ''}`}>
            {capName}
        </label>
    );
};

export default Label;
