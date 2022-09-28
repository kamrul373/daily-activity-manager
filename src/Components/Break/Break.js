import React from 'react';
import "./Break.css";
const Break = () => {
    return (
        <div className='break-container'>
            <h4>Add A Break</h4>
            <div className="break-placeholder">
                <span>10m</span>
                <span>20m</span>
                <span>30m</span>
                <span>40m</span>
                <span>50m</span>
            </div>
        </div>
    );
};

export default Break;