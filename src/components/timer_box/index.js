import React, {useState} from "react";
import {TimerContainer, TimerCircle, TimerButtons} from "./timer_elements";

function TimerBox (props){
    let totalTime = props.time;
    const [timeRemaining, setTimeRemaining] = useState(parseInt(totalTime));

    let timeRun = 0;
    const startTimer = () => {
        console.log(timeRemaining);
        let timer = window.setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
            timeRun += 1;
            console.log('hh' + timeRun);
            if (timeRun == totalTime) {
                console.log('hhh');
                clearInterval(timer);
            }
        }, 1000);
    }

    return (
        <TimerContainer>
            <TimerCircle time={totalTime} timeRemaining={timeRemaining}/>
            <TimerButtons onClick={startTimer}></TimerButtons>
        </TimerContainer>
    );
}

export default TimerBox;