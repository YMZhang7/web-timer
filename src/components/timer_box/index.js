import React from "react";
import {TimerContainer, TimerCircle, TimerButtons} from "./timer_elements";

function TimerBox (){
    return (
        <TimerContainer>
            <TimerCircle />
            <TimerButtons></TimerButtons>
        </TimerContainer>
    );
}

export default TimerBox;