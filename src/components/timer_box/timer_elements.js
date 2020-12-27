import styled from "styled-components";
import React from "react";
import {AiFillCaretRight, AiOutlinePause, AiOutlineReload} from "react-icons/ai"

export const TimerContainer = styled.div`
    width: 250px;
    height: 400px;
    background-color: rgba(255,255,255,0.6);
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    position: relative;
    &:hover {
        background-color: rgba(255,255,255, 0.8);
    }
`;

export const TimerInitialButton = (props) => {
    return (
        <TimerButtonContainer onClick={props.onClick}>
            <AiFillCaretRight size="20px" />
        </TimerButtonContainer>
    );
}

export const TimerRunningButtons = (props) => {
    return (
        // <div style="display: flex, flex-direction: row, ">
        <ButtonRowContainer>
            <TimerButtonContainer onClick={props.pauseEvent}>
                <AiOutlinePause size="20px" />
            </TimerButtonContainer>
            <div style={{width: "20px",}}></div>
            <TimerButtonContainer onClick={props.restartEvent}>
                <AiOutlineReload size="20px" />
            </TimerButtonContainer>
        </ButtonRowContainer>
    );
}

export const TimerPausedButtons = (props) => {
    return <ButtonRowContainer>
        <TimerButtonContainer onClick={props.startEvent}>
                <AiFillCaretRight size="20px" />
            </TimerButtonContainer>
            <div style={{width: "20px",}}></div>
            <TimerButtonContainer onClick={props.restartEvent}>
                <AiOutlineReload size="20px" />
            </TimerButtonContainer>
    </ButtonRowContainer>
}

export const TimerCompletedButton = (props) => {
    return <TimerButtonContainer onClick={props.restartEvent}>
        <AiOutlineReload size="20px" />
    </TimerButtonContainer>
}

const TimerButtonContainer = styled.button`
    width: 50px;
    height: 50px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
    background-color: white;
    border-radius: 20px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
`;

const ButtonRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
