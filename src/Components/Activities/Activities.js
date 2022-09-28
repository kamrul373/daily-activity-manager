import React from 'react';
import "./Activities.css";
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = (props) => {
    // defining state for activities
    const [activities, setActivities] = useState([]);
    // fetching data using useEffect
    useEffect(() => {
        fetch("db.json")
            .then(response => response.json())
            .then(activities => setActivities(activities));
    }, []);

    return (
        <div className='activities'>
            <h2>Select Today's Exercise</h2>
            {/* mapping activities and passing to activity Component */}
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        exerciseTime={props.exerciseTime}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;