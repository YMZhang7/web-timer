import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {TimerContainer, TimerInitialButton, TimerRunningButtons, TimerPausedButtons, TimerCompletedButton, DropdownContainer} from "./timer_elements";
import { AiFillDelete, AiFillEdit} from "react-icons/ai";



function TimerBoxComponent(props){
    const getButtons = () => {
        switch(props.currentState){
            case props.timerInitialState:
                return (<TimerInitialButton onClick={props.startTimer} />);
            case props.timerRunningState:
                return (<TimerRunningButtons pauseEvent={props.pauseTimer} restartEvent={props.restartTimer} />);
            case props.timerPausedState:
                return (<TimerPausedButtons startEvent={props.startTimer} restartEvent={props.restartTimer} />);
            case props.timerCompletedState:
                return (<TimerCompletedButton restartEvent={props.restartTimer} />);
            default:
                return <div></div>;
        }
    }

    return (
        <TimerContainer>
            <DropdownContainer>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" 
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: 'black',
                            fontSize: "20px",
                            padding: "5px"
                        }}>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item  as="button" onClick={props.deleteTimer} style={{color: 'red'}}>
                            <AiFillDelete style={{verticalAlign: "-2px", marginRight: "5px"}} />
                            DELETE
                        </Dropdown.Item>
                        <Dropdown.Item  as="button" onClick={props.setIsEditting} style={{color: 'green'}}>
                            <AiFillEdit style={{verticalAlign: "-2px", marginRight: "5px"}} />
                            EDIT
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </DropdownContainer>
            
            <p>{props.description}</p>
            <div style={{height: "20px"}}></div>
            <div style={{width: "180px", height: "180px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <CircularProgressbar 
                    value={parseInt(props.timeRemaining)/parseInt(props.totalTime) * 100} 
                    // text={props.getTime()} WHY NOT WORKING????
                    strokeWidth="10"
                    position="absolute"
                    styles={buildStyles({
                        strokeLinecap: 'butt',
                        textSize: '15px',
                        pathTransitionDuration: 0.5,
                        pathColor: "rgb(185,170,199)",
                        textColor: 'rgb(112,112,112)',
                        trailColor: 'transparent',
                    })}
                />
                <p style={{
                    position: 'absolute', 
                    fontSize: '25px', 
                    color: 'rgb(112,112,112)', 
                    paddingTop: '10px'
                }}>{props.getTime()}</p>
            </div>
            <div style={{height: "40px"}}></div>
            {getButtons()}
        </TimerContainer>
    )
}

export default TimerBoxComponent;