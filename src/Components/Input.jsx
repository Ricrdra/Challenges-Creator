import React from 'react';
import Label from "./Label";


const Input = ({name, attrs}) => {
    if (attrs.type === 'submit') {
        return (
            <input className='text-white font-black w-full  hover:cursor-pointer' name={name}
                   {...attrs}
            />
        );
    }
    return (
        <div className='input-container'>
            <Label name={name}/>
            <input className='input  w-3/4  px-2'
                   name={name} {...attrs}
            />
        </div>
    );
};

export default Input;
