import React from 'react'

function BtnDisplayComponent(props) {
    return (
        <div>
            {(props.state === 0)?
                <button className="stopwatch-btn stopwatch-btn-gre"
                onClick={props.start}>Start</button> : ""
            } 
            {(props.state === 1)?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={props.stop}>Stop</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
                </div>
                 : ""
            }
            {(props.state === 2) ?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.start}>Resume</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={props.reset}>Reset</button>
                </div>
                : ""
            } 
        </div>
    )
}

export default BtnDisplayComponent;

//2274115357