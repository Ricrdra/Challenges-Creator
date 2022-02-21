import React from 'react';
import Label from './Label';

const TextArea = ({name, attrs}) => {
    return (
        <div className='input-container'>
            <Label extraClass='' name={name}/>
            <textarea
                className='input   w-3/4  px-2 py-1'
                id={name}
                name={name}
                cols={25}
                {...attrs}
            />
        </div>

    );
};

export default TextArea;
