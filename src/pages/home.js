import React, {useState} from "react";
import {BackgroundContainer, BackgroundBlur, TimersGrid} from "../components/homepage_section/homepage_elements"
import TimerBox from "../components/timer_box";
import BottomBar from "../components/bottom_bar";
import timers from "../database";
import TimerEdittingModal from "../components/timer_editting_modal";
import BackgroundPickingModal from "../components/background_picking_modal";
import background_snow from "../images/background_snow.jpg"

function Home(){
    const deleteTimer = (id) => {
        setAllTimers((prevState) => {
            for (let i = 0; i < prevState.length; i++){
                console.log("id" + id);
                // eslint-disable-next-line
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
                // eslint-disable-next-line
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

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true); 


    const [showBGModal, setShowBGModal] = useState(false);
    const handleBGClose = () => setShowBGModal(false);
    const handleBGShow = () => setShowBGModal(true);
    

    const addTimer = (newTimer) => {
        setAllTimers((prevState) => {
            prevState.push(newTimer);
            console.log(newTimer);
            return prevState;
        });
        setTimerBoxes(allTimers.map((timer) => <TimerBox key={timer.id} id={timer.id} onDelete={deleteTimer} onEdit={editTimer} time={timer.time} description={timer.description}/>));
        setCurrId(prev => prev+1);
    }

    const backgrounds = [
        {
            id: 1,
            background: "linear-gradient(to bottom right, #FADAE0, #DAF5FA)",
            isColor: true
        },
        {
            id: 2,
            background: background_snow,
            isColor: false
        }
    ]

    const [currentBG, setBG] = useState(backgrounds[0]);
    const changeBG = (id) => {
        setBG(backgrounds[id-1])
    }

    

    return (
        <BackgroundContainer image={currentBG}>
            <BackgroundBlur useBlur={!currentBG.isColor}>
                <TimersGrid>
                    {timerBoxes}
                </TimersGrid>
                <TimerEdittingModal showModal={showModal} handleClose={handleClose} onSubmit={addTimer} newId={currId}/>
                <BackgroundPickingModal showBGModal={showBGModal} handleBGClose={handleBGClose} handleBGShow={handleBGShow} saveBackground={changeBG} backgrounds={backgrounds} currentBG={currentBG.id}/>
                <BottomBar addNewTimer={handleShow} changeBackground={handleBGShow}/>
            </BackgroundBlur>
        </BackgroundContainer>
    );
}

export default Home;