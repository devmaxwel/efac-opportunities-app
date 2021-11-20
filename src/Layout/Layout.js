import React from 'react'
import Navigation from '../Navigation/Navigation';
import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div>
        <main className={classes.main}>{props.children}</main>
        <Navigation />
        </div>
    )
}

export default Layout;
