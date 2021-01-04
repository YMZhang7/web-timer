import React from "react"
import {BottomBarContainer} from "./bottom_bar_elements"
import BottomBarButton from "../bottom_bar_button"
import {AiOutlineClockCircle, AiOutlineFileImage  } from "react-icons/ai";

function BottomBar () {
    return (
        <BottomBarContainer>
            <BottomBarButton icon={<AiOutlineClockCircle />} tooltipLabel="Add new timer"/>
            <BottomBarButton icon={<AiOutlineFileImage />} tooltipLabel="Change the background"/>
        </BottomBarContainer>
    )
}

export default BottomBar