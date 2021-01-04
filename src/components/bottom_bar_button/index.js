import React from "react"
import {BottomBarButtonContainer, CustomTooltip} from "./bottom_bar_button_elemenets"
import { OverlayTrigger } from "react-bootstrap";

function BottomBarButton(props){
    return(
        <BottomBarButtonContainer>
            <OverlayTrigger
                    placement="top"
                    overlay={
                        <CustomTooltip>
                            {props.tooltipLabel}
                        </CustomTooltip>
                    }
                >
                    {props.icon}
                </OverlayTrigger>
        </BottomBarButtonContainer>
    )
}

export default BottomBarButton;