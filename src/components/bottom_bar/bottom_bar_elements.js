import styled from "styled-components"

export const BottomBarContainer = styled.div`
    padding: 20px;
    position: fixed;
    bottom: 10px;
    width: 60%;
    height: 60px;
    background-color: rgba(255,255,255,0.40);
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 8px rgba(0,0,0,0.2);
    &:hover {
        background-color: rgba(255,255,255,0.5);
    }
`

export const ButtonsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
`

export const UserHeadContainer = styled.div`
    border-radius: 50px;
    width: 50px;
    height: 50px;
    position: relative;
    background-color: rgba(255,255,255,0.40);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`



