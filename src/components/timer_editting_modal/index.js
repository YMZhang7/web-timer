import {React, useState} from "react"
import TimerEdittingModalComponent from "./timer_editting_modal_component"

function TimerEdittingModal (props){
    
    const [newTimer, setNewTimer] = useState({
        id: props.newId,
        description: "",
        time: 0,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewTimer((prevState) => {
            prevState[name] = value;
            return prevState;
        });
    }

    const setTime = (e) => {
        let time = parseInt(newTimer.time);
        // eslint-disable-next-line
        if (e.target.name == "hour"){
            time += 3600 * parseInt(e.target.value);
            // eslint-disable-next-line
        } else if (e.target.name == "min"){
            time += 60 * parseInt(e.target.value);
            // eslint-disable-next-line
        } else if (e.target.name == "sec"){
            time += parseInt(e.target.value);
        }
        setNewTimer((prevState) => {
            prevState.time = time;
            return prevState;
        });
    }

    const saveButtonPressed = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        if(newTimer.description == ''){
            alert('The description cannot be empty');
        } else {
            // setMode(normalMode);
            console.log(props.newId)
            newTimer.id = props.newId;
            console.log(newTimer)
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
        />
    )
    
}

export default TimerEdittingModal