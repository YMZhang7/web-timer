import React from "react"
import {BottomBarButtonContainer, CustomTooltip} from "./bottom_bar_button_elemenets"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function BottomBarButton(props){
    return(
        <BottomBarButtonContainer onClick={props.onClick}>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip>
                        {props.tooltipLabel}
                    </Tooltip>
                }
            >
                {props.icon}
            </OverlayTrigger>
        </BottomBarButtonContainer>
    )
}

export default BottomBarButton;