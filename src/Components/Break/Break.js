import React from 'react';
import "./Break.css";
const Break = (props) => {
    return (
        <div className='break-container'>
            <h4>Add A Break</h4>
            <div className="break-placeholder">
                <span onClick={() => props.handleBreakTime(10)} >10m</span>
                <span onClick={() => props.handleBreakTime(20)}>20m</span>
                <span onClick={() => props.handleBreakTime(30)}>30m</span>
                <span onClick={() => props.handleBreakTime(40)}>40m</span>
                <span onClick={() => props.handleBreakTime(50)}>50m</span>
            </div>
        </div>
    );
};

export default Break;