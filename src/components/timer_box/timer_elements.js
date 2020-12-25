import styled from "styled-components";
import React from "react";
import {AiFillCaretRight} from "react-icons/ai"

export const TimerContainer = styled.div`
    width: 250px;
    height: 350px;
    background-color: rgba(255,255,255,0.78);
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TimerCircle = (props) => {
    let hour = Math.floor(props.timeRemaining / 3600);
    let hourStr = hour.toString().length === 1 ? '0' + hour.toString() : hour.toString();
    let min = Math.floor(props.timeRemaining % 3600 / 60);
    let minStr = min.toString().length === 1 ? '0' + min.toString() : min.toString();
    let sec = props.timeRemaining % 3600 % 60;
    let secStr = sec.toString().length === 1 ? '0' + sec.toString() : sec.toString();
    let d1 = 126;
    let d2 = 90;
    return (
        <BottomCircle>
            <MiddleCircle d1={d1} d2={d2}>
                <TopCircle>{hourStr + ":" + minStr + ":" + secStr}</TopCircle>
            </MiddleCircle>
        </BottomCircle>
    );
}

const BottomCircle = styled.div`
    background-color: rgb(233, 222, 244);
    border-radius: 50%;
    width: 180px;
    height: 180px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
`;

const MiddleCircle = styled.div`
    background: linear-gradient(${props => props.d1 + "deg"}, transparent 50%, white 50%),
    linear-gradient(${props => props.d2 + "deg"}, white 50%, transparent 50%);
    border-radius: 50%;
    width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopCircle = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

export const TimerButtons = (props) => {
    return (
        <TimerButtonContainer onClick={props.onClick}>
            <AiFillCaretRight size="20px" />
        </TimerButtonContainer>
    );
}

const TimerButtonContainer = styled.button`
    width: 50px;
    height: 50px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
    background-color: white;
    border-radius: 20px;
    margin-top: 50px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
`;
