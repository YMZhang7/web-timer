import {Tooltip} from "react-bootstrap"
import styled from "styled-components"


export const BottomBarButtonContainer = styled.div`
    position: relative;
    width: 45px;
    height: 45px;
    margin: 10px;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.60);
    box-shadow: 3px 3px 8px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    &:hover{
        background-color: rgb(255,255,255);
    }
`

export const CustomTooltip = styled(Tooltip)`
    margin-bottom: 10px;
    background-color: #555;
    width: auto;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    border-radius: 5px;
    color: white;
    padding: 5px;  
    &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    } 
`