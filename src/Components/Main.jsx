import React from 'react';

const Main = ({children}) => {
    return (
        <main className="mt-20  md:w-4/5 w-full mx-1 md:mx-auto">
            {children}
        </main>
    );
};

export default Main;
