import React, {useState} from "react";
import {BackgroundContainer, BackgroundBlur} from "../components/homepage_section/homepage_elements"
import TimerBox from "../components/timer_box";
import AddNewTimerBox from "../components/add_new_timer_box";
import timers from "../database";

function Home(){
    const [allTimers, setAllTimers] = useState(timers);
    let currId = timers.length + 1;
    const [timerBoxes, setTimerBoxes] = useState(allTimers.map((timer) => <TimerBox key={timer.id} time={timer.time} description={timer.description}/>));

    const addTimer = (newTimer) => {
        setAllTimers((prevState) => {
            newTimer.id = currId;
            prevState.push(newTimer);
            console.log("id: "+ newTimer.id);
            return prevState;
        });
        setTimerBoxes(allTimers.map((timer) => <TimerBox key={timer.id} time={timer.time} description={timer.description}/>));
        console.log("length: "+allTimers.length);
        console.log(allTimers);
    }

    return (
        <BackgroundContainer>
            <BackgroundBlur>
                {timerBoxes}
                <AddNewTimerBox onSubmit={addTimer} newId={allTimers.length+1}></AddNewTimerBox>
            </BackgroundBlur>
        </BackgroundContainer>
    );
}

export default Home;