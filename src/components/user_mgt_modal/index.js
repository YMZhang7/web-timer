import React from "react"
import firebase from "firebase"
import UserLoginModal from './user_login_modal'
import UserSignupModal from './user_signup_modal'
import {Modal} from "react-bootstrap"

function UserMgtModal (props) {
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = React.useState(false)
    const [loginState, setLoginState] = React.useState(true)
    const [signupError, setSignupError] = React.useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser((prevState) => {
            prevState[name] = value;
            return prevState
        })
    }

    const varifyUser = (e) => {
        e.preventDefault()
        console.log(user)
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
            props.handleClose()
            props.login(user)
            alert('signed in!')
            setLoginError(false)
        })
        .catch((error) => {
            setLoginError(true)
        })
    }

    const gotoSignup = () => setLoginState(false)
    const gotoLogin = () => setLoginState(true)

    const signupUser = (e) => {
        e.preventDefault()
        if (user.email == '' || user.password == ''){
            setSignupError(true)
        } else {
            console.log(user)
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                return result.user.updateProfile({
                    displayName: user.name == '' ? user.email : user.name,
                })
            })
            props.login({
                name: user.name,
                email: user.email,
                isLoggedIn: true,
            })
        }
    }

    return (
        <Modal
            show={props.showModal}
            onHide={props.handleClose}
            centered
        >
            {loginState ? 
                <UserLoginModal 
                    handleChange={handleChange}
                    loginError={loginError}
                    varifyUser={varifyUser}
                    gotoSignup={gotoSignup}
                    handleClose={props.handleClose}
                />
                :
                <UserSignupModal 
                    handleChange={handleChange}
                    signupError={signupError}
                    signupUser={signupUser}
                    handleClose={props.handleClose}
                    gotoLogin={gotoLogin}
                />
            }
            
        </Modal>
        
    )
}

export default UserMgtModal