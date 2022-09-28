import React from 'react';
import "./ExerciseDetails.css";
const ExerciseDetails = (props) => {
    return (
        <div className='exercise-details-container'>
            <h4>Exercise Details</h4>
            <div className="exercise-time">
                <p>Exercise Time</p>
                <p className='duration'>{props.exerciseTime}m</p>
            </div>
            <div className="break-time">
                <p>Break Time</p>
                <p className='duration'>0m</p>
            </div>
            <button className='btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;