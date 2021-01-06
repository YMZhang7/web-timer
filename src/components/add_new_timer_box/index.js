import React, {useState} from "react";
import {AddNewTimerBoxContainer, AddNewTimerContainer} from "./add_new_timer_box_elements";
import {AiOutlinePlus, AiOutlineClose} from "react-icons/ai";

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

    const setTime = (e) => {
        let time = parseInt(newTimer.time);
        // eslint-disable-next-line
        if (e.target.name == "hour"){
            time += 3600 * parseInt(e.target.value);
            // eslint-disable-next-line
        } else if (e.target.name == "min"){
            time += 60 * parseInt(e.target.value);
            // eslint-disable-next-line
        } else if (e.target.name == "sec"){
            time += parseInt(e.target.value);
        }
        setNewTimer((prevState) => {
            prevState.time = time;
            return prevState;
        });
    }

    const saveNewTimer = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        if(newTimer.description == ''){
            alert('The description cannot be empty');
        } else {
            setMode(normalMode);
            props.onSubmit(newTimer);
            setNewTimer({
                id: 0,
                description: "",
                time: 0,
            });
        }
    }

    const generateOptions = (limit) => {
        let hour = [];
        for (let i = 0; i <= limit; i++){
            hour.push(i);
        }
        let options = hour.map((h) => <option key={h} value={h}>{h}</option>);
        return options;
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
                    <AiOutlineClose onClick={closeDown}/>
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
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "20%"
                        }}>
                            <label htmlFor="hour-select">hours </label>
                            <select 
                                name="hour" 
                                id="hour-select"
                                onChange={setTime}
                                style={{
                                    outline: "none", 
                                    border: "1px grey solid", 
                                    borderRadius: "5px", 
                                    width: "60%", 
                                    backgroundColor: "transparent"
                                }}
                            >
                                {generateOptions(24)}
                            </select>

                            <label htmlFor="min-select">minutes </label>
                            <select 
                                name="min" 
                                id="min-select"
                                onChange={setTime}
                                style={{
                                    outline: "none", 
                                    border: "1px grey solid", 
                                    borderRadius: "5px", 
                                    width: "60%", 
                                    backgroundColor: "transparent"
                                }}
                            >
                                {generateOptions(59)}
                            </select>

                            <label htmlFor="sec-select">seconds </label>
                            <select 
                                name="sec" 
                                id="sec-select"
                                onChange={setTime}
                                style={{
                                    outline: "none", 
                                    border: "1px grey solid", 
                                    borderRadius: "5px", 
                                    width: "60%", 
                                    backgroundColor: "transparent"
                                }}
                            >
                                {generateOptions(59)}
                            </select>
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: "40px"
                            }}
                        >
                            <button onClick={saveNewTimer}>SUBMIT</button>
                        </div>
                    </form>
                </AddNewTimerContainer>
            }
        </>
       
    );
}

export default AddNewTimerBox;