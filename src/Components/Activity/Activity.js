import React from 'react';
import "./Activity.css";

const Activity = (props) => {
    const { id, activity, thumb, description, duration, unit } = props.activity;
    return (
        <div className='single-activity-container col-md-4 my-4'>
            <div className="card single-card">
                <img src={thumb} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{activity}</h5>
                    <p className="card-text">{description.slice(0, 100)}</p>
                    <p>Time required: <strong>{duration}{unit}</strong> </p>
                    <div className='button-container'>
                        <button className="btn w-100 bg-custom" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;