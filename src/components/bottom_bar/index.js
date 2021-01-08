import React from "react"
import {BottomBarContainer, UserHeadContainer, ButtonsContainer} from "./bottom_bar_elements"
import BottomBarButton from "../bottom_bar_button"
import {AiOutlineClockCircle, AiOutlineFileImage, AiFillFileAdd, AiOutlineUser} from "react-icons/ai";
// import { Modal, Button } from "react-bootstrap";
import {useRef} from "react";

function BottomBar (props) {
    return (
        <BottomBarContainer>
            <ButtonsContainer>
                <UserHeadContainer>
                    <AiOutlineUser size="40px" />
                </UserHeadContainer>
                <p style={{paddingTop: '13px'}}>Mona</p>
            </ButtonsContainer>
            

            <ButtonsContainer>
                <BottomBarButton icon={<AiOutlineClockCircle />} tooltipLabel="Add new timer" onClick={props.addNewTimer} />
                <BottomBarButton icon={<AiOutlineFileImage />} tooltipLabel="Change the background" onClick={props.changeBackground} />
                <BottomBarButton icon={<AiFillFileAdd />} tooltipLabel="Add a memo" />
            </ButtonsContainer>
        </BottomBarContainer>
    )
}

export default BottomBar