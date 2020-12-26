import React, {useState} from "react";
import {AddNewTimerBoxContainer, AddNewTimerContainer, ClosingButton} from "./add_new_timer_box_elements";
import {AiOutlinePlus, AiOutlineClose} from "react-icons/ai";
import timers from "../../database";

function AddNewTimerBox (props) {
    // ** == Mode == **
    let normalMode = 0;
    let edittingMode = 1;
    // ================

    const [mode, setMode] = useState(normalMode);
    const [newTimer, setNewTimer] = useState({
        id: 0,
        description: "",
        time: 0,
    });

    const addNewTimer = () => {
        setMode(edittingMode);    
    }

    const closeDown = () => {
        setMode(normalMode);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewTimer((prevState) => {
            console.log(prevState.id);
            prevState.id = props.newId;
            prevState[name] = value;
            return prevState;
        });
    }

    const saveNewTimer = (e) => {
        e.preventDefault();
        setMode(normalMode);
        props.onSubmit(newTimer);
        setNewTimer({
            id: 0,
            description: "",
            time: 0,
        })
    }

    return (
        <>
            {mode === normalMode && 
                <AddNewTimerBoxContainer onClick={addNewTimer}>
                    <AiOutlinePlus size="50px" color="rgba(112,112,112,0.5)"/>
                </AddNewTimerBoxContainer>
            }
            {mode === edittingMode && 
                <AddNewTimerContainer>
                    <ClosingButton onClick={closeDown}>
                        <AiOutlineClose/>
                    </ClosingButton>
                    <form>
                        <p style={{fontSize: "15px",}}>Description:</p>
                        <input 
                            type="text" 
                            name="description"
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                height: "30px",
                                outline: "none",
                                border: "2px solid rgba(112,112,112, 0.5)",
                                borderRadius: "10px",
                                backgroundColor: "transparent"
                            }}
                        />
                        <p>Time:</p>
                        <input 
                            type="text"
                            name="time"
                            onChange={handleChange}
                        />
                        <button onClick={saveNewTimer}>SUBMIT</button>
                    </form>
                </AddNewTimerContainer>
            }
        </>
       
    );
}

export default AddNewTimerBox;