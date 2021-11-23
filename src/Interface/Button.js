import React from 'react';
import './Button.css';

const Button=(Onclick=null, children=null)=>{
    return (
        <div className="actions">
            <butto Onclick={Onclick}>{children}</butto>
        </div>
    )
}

export default Button;
