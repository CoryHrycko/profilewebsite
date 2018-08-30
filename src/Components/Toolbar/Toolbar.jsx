import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButtton.jsx';
import './Toolbar.css';

const toolbar = props => (
    <header className='toolBar'>
        <nav className='toolBarNav'>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='toolBarLogo'><a href='root'>The Logo, Cory Hrycko's Website</a></div>
            ,<div className='spacer' />
            <div className='toolBarNavItems'>
                <ul>
                    <li><a href="x">Projects</a></li>
                    <li><a href="x">Bio</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;