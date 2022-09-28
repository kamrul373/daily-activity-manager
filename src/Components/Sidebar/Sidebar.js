import React, { useState } from 'react';
import { setBreakTimeLocally } from '../../utilities/local';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Profile from '../Profile/Profile';
import "./Sidebar.css";
const Sidebar = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (duration) => {
        setBreakTime(duration);
        setBreakTimeLocally(duration);
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