import React from 'react';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Profile from '../Profile/Profile';
import "./Sidebar.css";
const Sidebar = (props) => {
    return (
        <div className='sidebar-container'>
            <Profile></Profile>
            <Break></Break>
            <ExerciseDetails exerciseTime={props.exerciseTime}></ExerciseDetails>
        </div>
    );
};

export default Sidebar;