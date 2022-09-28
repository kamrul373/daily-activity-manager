import React from 'react';
import "./Profile.css";
import profile from "../../images/profile.png";

const Profile = () => {
    return (
        <div>
            <div className='profile-container'>
                <div className="profile-thumb">
                    <img src={profile} alt="kamrul hasan" />
                </div>
                <div className="profile-info">
                    <h4>Kamrul Hasan</h4>
                    <small>Dhaka, Bangladesh</small>
                </div>
            </div>
            <div className="profile-details">
                <div className="weight">
                    <p>60<sub>kg</sub></p>
                    <small>Weight</small>
                </div>
                <div className="height">
                    <p>5.4<sub>ft</sub></p>
                    <small>Height</small>
                </div>
                <div className="age">
                    <p>30<sub>yrs</sub></p>
                    <small>Age</small>
                </div>
            </div>
        </div>
    );
};

export default Profile;