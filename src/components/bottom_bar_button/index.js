import React from "react"
import {BottomBarButtonContainer} from "./bottom_bar_button_elemenets"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function BottomBarButton(props){
    return(
        <OverlayTrigger
            // trigger="hover"
            placement="top"
            overlay={
                <Tooltip id="placement">
                    {props.tooltipLabel}
                </Tooltip>
            }
        >
            <BottomBarButtonContainer onClick={props.onClick} ref={props.refe}>
                {props.icon}
            </BottomBarButtonContainer>
        </OverlayTrigger>   
    )
}

export default BottomBarButton;