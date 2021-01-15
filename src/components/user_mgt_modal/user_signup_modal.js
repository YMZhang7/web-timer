import React from "react"
import {Modal, Button, Form} from "react-bootstrap"

function UserSignupModal (props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Sign up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address here..." name="email" onChange={props.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Preferred name: </Form.Label>
                        <Form.Control type="name" name="name" onChange={props.handleChange}></Form.Control>
                        <Form.Text muted>If empty, the email address will be used as your name.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={props.handleChange} />
                        {props.signupError && <Form.Text className="text-danger">* Email/password cannot be empty.</Form.Text>}
                    </Form.Group>
                    <Button variant="primary" type="submit" centered onClick={props.signupUser}>Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.gotoLogin}>Log in</Button>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </>
    )
}

export default UserSignupModal