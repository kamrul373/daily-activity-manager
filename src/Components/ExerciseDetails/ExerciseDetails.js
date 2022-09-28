import React from 'react';
import "./ExerciseDetails.css";
const ExerciseDetails = ({ breakTime, exerciseTime }) => {
    return (
        <div className='exercise-details-container'>
            <h4>Exercise Details</h4>
            <div className="exercise-time">
                <p>Exercise Time</p>
                <p className='duration'>{exerciseTime}m</p>
            </div>
            <div className="break-time">
                <p>Break Time</p>
                <p className='duration'>{breakTime}m</p>
            </div>
            <button className='btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;