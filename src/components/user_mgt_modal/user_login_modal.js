import {Modal, Button, Form} from "react-bootstrap"

function UserLoginModal (props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address here..." name="email" onChange={props.handleChange} />
                        {props.loginError && <Form.Text className="text-danger">* There is something wrong with the email/password. Please try again.</Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={props.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={props.varifyUser}>Log in</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Button variant="primary" onClick={props.gotoSignup}>Sign up</Button>
            </Modal.Footer>
        </>
    )
}

export default UserLoginModal