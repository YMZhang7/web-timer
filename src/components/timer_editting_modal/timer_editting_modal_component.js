import React from "react"
import {OptionContainer} from "./timer_editting_modal_elements"
import {Modal, Button} from "react-bootstrap";


function TimerEdittingModalComponent(props){
    const generateOptions = (limit) => {
        let hour = [];
        for (let i = 0; i <= limit; i++){
            hour.push(i);
        }
        let options = hour.map((h) => <option key={h} value={h}>{h}</option>);
        return options;
    }

    return (
        <Modal 
            show={props.showModal} 
            onHide={props.handleClose} 
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title>New Timer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label style={{fontSize: "18px",}}>Description:</label>
                    <input 
                        type="text" 
                        name="description"
                        // onChange={handleChange}
                        style={{
                            width: "100%",
                            height: "30px",
                            outline: "none",
                            border: "2px solid rgba(112,112,112, 0.5)",
                            borderRadius: "10px",
                            backgroundColor: "transparent"
                        }}
                    />
                    <div style={{height: '20px'}}></div>
                    <label style={{fontSize: "18px",}}>Time:</label>
                    <div style={{ display: "flex", flexDirection: "column", height: "auto" }}>
                        <OptionContainer>
                            <label htmlFor="hour-select" style={{fontSize: "15px",}}>hours </label>
                            <select 
                                name="hour" 
                                id="hour-select"
                                // onChange={setTime}
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
                        </OptionContainer>
                        <OptionContainer>
                            <label htmlFor="min-select" style={{fontSize: "15px",}}>minutes </label>
                            <select 
                                name="min" 
                                id="min-select"
                                // onChange={setTime}
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
                        </OptionContainer>
                        <OptionContainer>
                            <label htmlFor="sec-select" style={{fontSize: "15px",}}>seconds </label>
                            <select 
                                name="sec" 
                                id="sec-select"
                                // onChange={setTime}
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
                        </OptionContainer>
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: "40px"
                            }}
                        >
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={props.saveButtonPressed}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TimerEdittingModalComponent;