import styled from "styled-components"


export const BottomBarButtonContainer = styled.button`
    position: relative;
    width: 45px;
    height: 45px;
    margin: 8px;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.60);
    box-shadow: 3px 3px 8px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    outline: none;
    border: none;
    &:focus{
        outline: none;
    }
    &:hover{
        background-color: rgb(255,255,255);
    }
`