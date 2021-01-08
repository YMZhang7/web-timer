import styled from "styled-components";

export const BackgroundContainer = styled.div`
    background: ${props => props.image.isColor ? props.image.background : `url(${props.image.background})`};
    width: 100%;
    height: 100%;
    position: fixed;
`;

export const BackgroundBlur = styled.div`
    background: ${props => props.useBlur ? 'rgba(221,221,221,0.65)' : 'transparent'};
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TimersGrid = styled.div`
    position: relative;
    top: 30px;
    height: calc(95% - 100px);
    display: grid;
    grid-template-columns: repeat(4, 250px);
    column-gap: 20px;
    row-gap: 20px;
    overflow-y: scroll;
    overflow-x: scroll;

    @media screen and (max-width: 1100px){
        grid-template-columns: repeat(3, 250px);
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, 250px);
    }
    @media screen and (max-width: 520px){
        grid-template-columns: repeat(1, 250px);
    }
`;