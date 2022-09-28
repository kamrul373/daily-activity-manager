import React from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <Profile></Profile>
            <Break></Break>
        </div>
    );
};

export default Sidebar;