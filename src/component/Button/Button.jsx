import React from 'react';

// const Button = ({children}) => { /* can also do shortcut destructuring */
const Button = (props) => {
    const {children} = props
    return (
        <div className='text-center my-5'>
            <button className='btn btn-error text-white'>{children}</button>
        </div>
    );
};

export default Button;