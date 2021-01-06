import React, {useState} from "react";
import AddNewTimerBox from "../add_new_timer_box";
import TimerBoxComponent from "./timer_box"

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
            // eslint-disable-next-line
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
        { isEditting ? 
            <AddNewTimerBox onSubmit={editTimer} newId={props.id} /> : 
            <TimerBoxComponent 
                description={props.description}
                deleteTimer={deleteTimer} 
                setIsEditting={setIsEditting}
                currentState={currentState}
                timeRemaining={timeRemaining}
                totalTime={totalTime}
                getTime={getTime}
                timerInitialState={timerInitialState}
                startTimer={startTimer}
                timerRunningState={timerRunningState}
                pauseTimer={pauseTimer}
                restartTimer={restartTimer}
                timerPausedState={timerPausedState}
                timerCompletedState={timerCompletedState}
            />
        }
        </div>
    );
}

export default TimerBox;