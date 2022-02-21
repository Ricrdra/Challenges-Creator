import React from 'react';

const Header = ({children}) => {
    return (
        <header className="py-4  select-none w-full bg-primary-dark shadow-xl shadow-purple-200">
            {children}
        </header>
    );
};

export default Header;
