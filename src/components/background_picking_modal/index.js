import {React, useState} from "react"
import {Modal, Button} from "react-bootstrap"
import {ImagesContainer, ImageContainer} from "./background_picking_modal_elements"
import background_snow from "../../images/background_snow.jpg"

function BackgroundPickingModal (props) {
    const [currBG, setBG] = useState(props.currentBG);

    const switchBG = (e) => {
        setBG(e.target.id);
    }

    const saveBG = () => {
        props.saveBackground(currBG)
        props.handleBGClose()
    }

    const getBackgrounds = props.backgrounds.map((e) => <ImageContainer onClick={switchBG} key={e.id} id={e.id} image={e.background} isColor={e.isColor} style={{border: e.id == currBG ? "4px solid black" : "none"}} />)

    return (
        <Modal
            show={props.showBGModal}
            onHide={props.handleBGClose}
            centered
        >
            <Modal.Header>
                <Modal.Title>Background</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ImagesContainer>
                    {getBackgrounds}
                </ImagesContainer>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleBGClose}>Close</Button>
                <Button varient="primary" onClick={saveBG}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BackgroundPickingModal