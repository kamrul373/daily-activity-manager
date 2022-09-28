import React from 'react';
import "./Activities.css";
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    // defining state for activities
    const [activities, setActivities] = useState([]);
    // fetching data using useEffect
    useEffect(() => {
        fetch("db.json")
            .then(response => response.json())
            .then(activities => setActivities(activities));
    }, []);

    return (
        <div className='activities-container mt-5 px-2'>
            <h3>Select Today's Excercise</h3>
            {/* mapping activities and passing to activity Component */}
            <div className='row'>
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;