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
    return (
        <BottomCircle>
            <MiddleCircle>
                <TopCircle />
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
    background: linear-gradient(126deg, transparent 50%, white 50%),
    linear-gradient(90deg, white 50%, transparent 50%);
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
`;

export const TimerButtons = () => {
    return (
        <TimerButtonContainer>
            <AiFillCaretRight size="20px" />
        </TimerButtonContainer>
    );
}

const TimerButtonContainer = styled.div`
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
`;
