import React, {useState} from "react";
import {TimerContainer, TimerInitialButton, TimerRunningButtons, TimerPausedButtons, TimerCompletedButton} from "./timer_elements";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {AiFillMedicineBox, AiOutlineMore, AiFillDelete, AiFillEdit} from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown'
import AddNewTimerBox from "../add_new_timer_box";

function TimerBox (props){
    // **===== Timer state management ===**
    let timerInitialState = 0;
    let timerRunningState = 1;
    let timerPausedState = 2;
    let timerCompletedState = 3;
    // === End of timer state management ==

    // **===== React State Management ===**
    let totalTime = props.time;
    const [timeRemaining, setTimeRemaining] = useState(parseInt(totalTime));
    const [currentState, setTimerState] = useState(timerInitialState);
    const [timer, setTimer] = useState(0);
    const [isEditting, setIsEditting] = useState(false);
    // == End of React State Management ===


    let timeRun = 0;
    const startTimer = () => {
        // update timer state
        setTimerState(timerRunningState);
        // update timeRemaining
        timeRun = totalTime - timeRemaining;
        setTimer(window.setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
            timeRun += 1;
            if (timeRun == totalTime) {
                alert(props.description + "'s timer is completed");
                setTimer(prevState => clearInterval(prevState));
                setTimerState(timerCompletedState);
            }
        }, 1000));
    }

    const pauseTimer = () => {
        // cancel timer
        setTimer(prev => clearInterval(prev));
        // update timer state
        setTimerState(timerPausedState);
    }

    const restartTimer = () => {
        // update timer state
        setTimerState(timerInitialState);
        // set timer
        setTimer(prev => clearInterval(prev));
        // set timeRemaining
        setTimeRemaining(totalTime);
    }

    const getTime = () => {
        let hour = Math.floor(timeRemaining / 3600);
        let hourStr = hour.toString().length === 1 ? '0' + hour.toString() : hour.toString();
        let min = Math.floor(timeRemaining % 3600 / 60);
        let minStr = min.toString().length === 1 ? '0' + min.toString() : min.toString();
        let sec = timeRemaining % 3600 % 60;
        let secStr = sec.toString().length === 1 ? '0' + sec.toString() : sec.toString();
        return hourStr + ":" + minStr + ":" + secStr;
    }

    const deleteTimer = () => {
        props.onDelete(props.id);
    }

    const editTimer = () => {
        
    }

    return (
        <div>
        { isEditting ? <AddNewTimerBox onSubmit={editTimer} newId={props.id} /> : <TimerContainer>
            <div style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                zIndex: "999",
            }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                        outline: "none",
                        border: "none",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "transparent",
                    }}>
                        <AiOutlineMore size="30px"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item  
                            style={{
                                backgroundColor: "white",
                                width: "120px",
                                height: "30px",
                                color: "red",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.2)",
                                borderRadius: "5px",
                                boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
                                outline: "none"
                            }}
                            as="button"
                            onClick={deleteTimer}
                        ><AiFillDelete style={{verticalAlign: "-2px"}}/> DELETE</Dropdown.Item>
                        <Dropdown.Item 
                            style={{
                                backgroundColor: "white",
                                width: "120px",
                                height: "30px",
                                color: "green",
                                border: "none",
                                borderRadius: "5px",
                                boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
                                outline: "none"
                            }}
                            as="button"
                        ><AiFillEdit style={{verticalAlign: "-2px"}}/> EDIT</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <p>{props.description}</p>
            <div style={{height: "20px"}}></div>
            <div style={{width: "180px", height: "180px"}}>
                <CircularProgressbar 
                    value={parseInt(timeRemaining)/parseInt(totalTime) * 100} 
                    text={getTime()}
                    strokeWidth="10"
                    styles={buildStyles({
                        strokeLinecap: 'butt',
                        textSize: '15px',
                        pathTransitionDuration: 0.5,
                        pathColor: "rgb(185,170,199)",
                        textColor: 'rgb(112,112,112)',
                        trailColor: 'transparent',
                        backgroundColor: 'red',
                    })}
                />
            </div>
            <div style={{height: "40px"}}></div>
            {currentState === timerInitialState && <TimerInitialButton onClick={startTimer} />}
            {currentState === timerRunningState && <TimerRunningButtons pauseEvent={pauseTimer} restartEvent={restartTimer} />}
            {currentState === timerPausedState && <TimerPausedButtons startEvent={startTimer} restartEvent={restartTimer} />}
            {currentState === timerCompletedState && <TimerCompletedButton restartEvent={restartTimer} />}
        </TimerContainer>}
        </div>
    );
}

export default TimerBox;