import React from 'react';
import "./Activity.css";

const Activity = (props) => {
    const { id, activity, thumb, description, duration, unit } = props.activity;
    return (
        <div className='single-activity-container'>
            <div className="activity-thumb">
                <img src={thumb} alt="" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{activity}</h3>
                <p className="card-text">{description.slice(0, 100)}</p>
                <p className='time'>Time required: <strong>{duration}{unit}</strong> </p>
                <div className='button-container'>
                    <button onClick={() => props.exerciseTime(duration)} className="btn" type="button">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;