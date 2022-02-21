import React from 'react';

const Form = ({children, action, method}) => {
    return (
        <form action={action} className="flex flex-col space-y-4 shadow p-4" method={method}>
            {children}
        </form>
    );
};

export default Form;
