import React, { useState } from 'react';
import { setBreakTimeLocally } from '../../utilities/local';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Profile from '../Profile/Profile';
import "./Sidebar.css";
const Sidebar = (props) => {
    // break time state
    const [breakTime, setBreakTime] = useState(0);
    // break time hander
    const handleBreakTime = (duration) => {
        const time = parseInt(duration);
        // time setting frontend
        setBreakTime(time);
        // time storing in localstorage
        setBreakTimeLocally(time);
    }
    return (
        <div className='sidebar-container'>
            <Profile></Profile>
            <Break handleBreakTime={handleBreakTime}></Break>
            <ExerciseDetails
                exerciseTime={props.exerciseTime}
                breakTime={breakTime}
            ></ExerciseDetails>
        </div>
    );
};

export default Sidebar;