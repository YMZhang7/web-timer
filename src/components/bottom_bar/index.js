import React from "react"
import {BottomBarContainer} from "./bottom_bar_elements"
import BottomBarButton from "../bottom_bar_button"
import {AiOutlineClockCircle, AiOutlineFileImage, AiFillFileAdd} from "react-icons/ai";
// import { Modal, Button } from "react-bootstrap";

function BottomBar (props) {
    const addNewTimer = () => {
        console.log('hh');
    return (
        <div style={{width: "100%", height: "100%", backgroundColor: "red"}}></div>
    )
    }

    return (
        <BottomBarContainer>
            <BottomBarButton icon={<AiOutlineClockCircle />} tooltipLabel="Add new timer" onClick={props.addNewTimer}/>
            <BottomBarButton icon={<AiOutlineFileImage />} tooltipLabel="Change the background"/>
            <BottomBarButton icon={<AiFillFileAdd />} tooltipLabel="Add a memo"/>
        </BottomBarContainer>
    )
}

export default BottomBar