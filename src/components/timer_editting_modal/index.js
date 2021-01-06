import React from "react"
import TimerEdittingModalComponent from "./timer_editting_modal_component"

function TimerEdittingModal (props){
    

    const saveButtonPressed = () => {
        // saveNewTimer()
        props.handleClose()
    }

    return (
        <TimerEdittingModal />
    )
    
}

export default TimerEdittingModal