import React from "react"
import {Modal, Button} from "react-bootstrap"

function UserInfoModal (props) {
    const logOff = () => {
        props.logoff()
        props.handleClose()
    }
    return (
        <Modal
            show={props.showModal}
            onHide={props.handleClose}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>{props.user.name}</h2>
                <p className="text-muted">{props.user.email}</p>
                <Button onClick={logOff}>Log off</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserInfoModal