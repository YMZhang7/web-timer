import styled from "styled-components"

export const BottomBarContainer = styled.div`
    position: fixed;
    bottom: 10px;
    width: 60%;
    height: 60px;
    background-color: rgba(255,255,255,0.40);
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 8px rgba(0,0,0,0.2);
    &:hover {
        background-color: rgba(255,255,255,0.5);
    }
`



