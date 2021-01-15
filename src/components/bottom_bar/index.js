import {React, useState, useEffect} from "react"
import {BottomBarContainer, UserHeadContainer, ButtonsContainer, UserContainer} from "./bottom_bar_elements"
import BottomBarButton from "../bottom_bar_button"
import {AiOutlineClockCircle, AiOutlineFileImage, AiFillFileAdd, AiOutlineUser} from "react-icons/ai";
import firebase from 'firebase';

function BottomBar (props) {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('logged in')
                props.userSignin({
                    name: user.displayName,
                    email: user.email,
                    isLoggedIn: true,
                })
            } else {
                console.log('logged out')
                props.userSignin({
                    name: 'Sign in',
                    email: '',
                    isLoggedIn: false,
                })
            }
          });
    }, [])
    

    return (
        <BottomBarContainer>
            <UserContainer onClick={props.changeUserStatus}>
                <UserHeadContainer style={{background: 'lightgrey'}}>
                    <AiOutlineUser size="40px" />
                </UserHeadContainer>
                <p style={{paddingTop: '13px'}}>{props.user.name}</p>
            </UserContainer>
            

            <ButtonsContainer>
                <BottomBarButton icon={<AiOutlineClockCircle />} tooltipLabel="Add new timer" onClick={props.addNewTimer} />
                <BottomBarButton icon={<AiOutlineFileImage />} tooltipLabel="Change the background" onClick={props.changeBackground} />
                <BottomBarButton icon={<AiFillFileAdd />} tooltipLabel="Add a memo" />
            </ButtonsContainer>
        </BottomBarContainer>
    )
}

export default BottomBar