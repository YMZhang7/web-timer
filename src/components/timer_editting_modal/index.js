import {React, useState, useEffect} from "react"
import TimerEdittingModalComponent from "./timer_editting_modal_component"

function TimerEdittingModal (props){
    
    const [newTimer, setNewTimer] = useState({});
    
    useEffect(() => {
        setNewTimer(props.timer == null ? 
            {
                id: props.newId,
                description: "",
                time: 0,
            } : 
            {
                id: props.timer.id,
                description: props.timer.description,
                time: props.timer.time
            })
    }, props.timer == null ? [] : [props.timer])

    const handleChange = (e) => {
        const {name, value} = e.target;
        let timer = Object.create(newTimer);
        timer[name] = value;
        setNewTimer(timer)
    }

    const setTime = (e) => {
        let time = parseInt(newTimer.time);
        // eslint-disable-next-line
        if (e.target.name == "hour"){
            let prevHour = Math.floor(newTimer.time / 3600);
            time = time - prevHour * 3600 + 3600 * parseInt(e.target.value);
            // eslint-disable-next-line
        } else if (e.target.name == "min"){
            let prevMin = Math.floor(newTimer.time % 3600 / 60);
            time = time - prevMin * 60 + 60 * parseInt(e.target.value);
            // eslint-disable-next-line
        } else if (e.target.name == "sec"){
            let prevSec = newTimer % 3600 % 60;
            time = time - prevSec + parseInt(e.target.value);
        }
        let timer = Object.create(newTimer);
        timer.time = time;
        setNewTimer(timer);
    }

    const saveButtonPressed = (e) => {
        e.preventDefault();
        if(newTimer.description == ''){
            alert('The description cannot be empty');
        } else {
            // newTimer.id = props.newId;
            props.onSubmit(newTimer);
            setNewTimer({
                id: 0,
                description: "",
                time: 0,
            });
             props.handleClose();
        }
    }

    return (
        <TimerEdittingModalComponent 
            showModal={props.showModal}
            handleClose={props.handleClose}
            saveButtonPressed={saveButtonPressed}
            setTime={setTime}
            handleChange={handleChange}
            timer={newTimer}
        />
    )
    
}

export default TimerEdittingModal