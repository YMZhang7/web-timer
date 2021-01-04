import React, {useState} from "react";
import {BackgroundContainer, BackgroundBlur, TimersGrid} from "../components/homepage_section/homepage_elements"
import TimerBox from "../components/timer_box";
import AddNewTimerBox from "../components/add_new_timer_box";
import BottomBar from "../components/bottom_bar";
import timers from "../database";

function Home(){

    const deleteTimer = (id) => {
        setAllTimers((prevState) => {
            for (let i = 0; i < prevState.length; i++){
                console.log("id" + id);
                if (prevState[i].id == id){
                    console.log("delete!");
                    prevState.splice(i, 1);
                    break;
                }
            }
            console.log(prevState);
            return prevState;
        });
        setTimerBoxes(allTimers.map((timer) => <TimerBox key={timer.id} id={timer.id} onDelete={deleteTimer} onEdit={editTimer} time={timer.time} description={timer.description}/>));
    }

    const editTimer = (newTimer) => {
        setAllTimers((prevState) => {
            for (let i = 0; i < prevState.length; i++){
                if (prevState[i].id == newTimer.id){
                    prevState[i] = newTimer;
                    break;
                }
            }
            return prevState;
        });
        setTimerBoxes(allTimers.map((timer) => <TimerBox key={timer.id} id={timer.id} onDelete={deleteTimer} time={timer.time} description={timer.description}/>));
    }

    const [allTimers, setAllTimers] = useState(timers);
    const [currId, setCurrId] = useState(allTimers.length + 1);
    const [timerBoxes, setTimerBoxes] = useState(allTimers.map((timer) => <TimerBox key={timer.id} id={timer.id} onDelete={deleteTimer} onEdit={editTimer} time={timer.time} description={timer.description}/>));

    

    const addTimer = (newTimer) => {
        setAllTimers((prevState) => {
            prevState.push(newTimer);
            console.log("id: "+ newTimer.id);
            return prevState;
        });
        setTimerBoxes(allTimers.map((timer) => <TimerBox key={timer.id} id={timer.id} onDelete={deleteTimer} onEdit={editTimer} time={timer.time} description={timer.description}/>));
        setCurrId(prev => prev+1);
    }

    

    return (
        <BackgroundContainer>
            <BackgroundBlur>
                <TimersGrid>
                    {timerBoxes}
                    <AddNewTimerBox onSubmit={addTimer} newId={currId} ></AddNewTimerBox>
                </TimersGrid>
                <BottomBar />
            </BackgroundBlur>
        </BackgroundContainer>
    );
}

export default Home;