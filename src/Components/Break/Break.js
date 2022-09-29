import React from 'react';
import "./Break.css";
const Break = (props) => {
    return (
        <div className='break-container'>
            <h4>Add A Break</h4>
            <div className="break-placeholder">
                <span onClick={(e) => props.handleBreakTime(e.target.innerText)} >5m</span>
                <span onClick={(e) => props.handleBreakTime(e.target.innerText)}>10m</span>
                <span onClick={(e) => props.handleBreakTime(e.target.innerText)}>15m</span>
                <span onClick={(e) => props.handleBreakTime(e.target.innerText)}>20m</span>
                <span onClick={(e) => props.handleBreakTime(e.target.innerText)}>30m</span>
            </div>
        </div>
    );
};

export default Break;