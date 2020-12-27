import styled from "styled-components";
import background_snow from "../../images/background_snow.jpg"

export const BackgroundContainer = styled.div`
    background: url(${background_snow});
    /* background-size: 100% 100%; */
    /* background: linear-gradient(to bottom right, #FADAE0, #DAF5FA); */
    width: 100%;
    height: 100%;
    position: fixed;
`;

export const BackgroundBlur = styled.div`
    background-color: rgba(221,221,221,0.65);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* overflow-y: scroll; */
    padding: 20px;
    /* grid-template-columns: repeat(5, 250px);
   
    column-gap: 20px;
    row-gap: 20px; */
`;

export const TimersGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 250px);
    column-gap: 20px;
    row-gap: 20px;
    overflow-y: scroll;
`;