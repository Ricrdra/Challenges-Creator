import React from 'react';

const Title = ({main, sub}) => {
    return (
        <React.Fragment>
            <a href="https://gethired-community-c8.vercel.app/" rel="noreferrer" target="_blank"><h1
                className="text-4xl text-gray-100 font-black inline">{main}</h1></a>
            <p className="text-4xl text-gray-100 inline">{sub}</p>
        </React.Fragment>);
};

export default Title;
