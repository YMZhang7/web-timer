import React from "react";
import {BackgroundContainer, BackgroundBlur} from "../components/homepage_section/homepage_elements"
import TimerBox from "../components/timer_box";

function Home(){
    return (
        <BackgroundContainer>
            <BackgroundBlur>
                <TimerBox />
            </BackgroundBlur>
        </BackgroundContainer>
    );
}

export default Home;