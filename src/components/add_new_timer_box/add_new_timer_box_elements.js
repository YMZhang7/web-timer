import styled from "styled-components";

export const AddNewTimerBoxContainer = styled.div`
    width: 250px;
    height: 400px;
    border: 3px dotted rgba(112,112,112,0.5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`;

export const AddNewTimerContainer = styled.div`
    width: 250px;
    height: 400px;
    border-radius: 20px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    background-color: rgba(255,255,255,0.6);
    padding: 20px;
`;

export const ClosingButton = styled.div`
    
`;