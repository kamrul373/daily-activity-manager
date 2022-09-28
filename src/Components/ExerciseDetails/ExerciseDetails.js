import React from 'react';
import "./ExerciseDetails.css";
// React Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = ({ breakTime, exerciseTime }) => {
    // Activity Completion Toastify
    const notify = () => {
        toast.success("Wow You have completed your daily exercise !", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

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
            <button className='btn' onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default ExerciseDetails;