import styled from "styled-components"

export const ImagesContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: repeat(5, 1fr);
    position: relative;
`

export const ImageContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: ${props => props.isColor ? props.image : `url(${props.image})`};
    background-size: cover;
`