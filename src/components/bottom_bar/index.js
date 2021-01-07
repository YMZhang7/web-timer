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
                <p style={{paddingTop: '7px'}}>Mona</p>
            </ButtonsContainer>
            

            <ButtonsContainer>
                <BottomBarButton icon={<AiOutlineClockCircle />} tooltipLabel="Add new timer" onClick={props.addNewTimer} refe={useRef()}/>
                <BottomBarButton icon={<AiOutlineFileImage />} tooltipLabel="Change the background" />
                <BottomBarButton icon={<AiFillFileAdd />} tooltipLabel="Add a memo" />
            </ButtonsContainer>
        </BottomBarContainer>
    )
}

export default BottomBar