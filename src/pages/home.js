import React, { useState } from "react";
import firebase from "firebase"
import { BackgroundContainer, BackgroundBlur, TimersGrid } from "../components/homepage_section/homepage_elements"
import TimerBox from "../components/timer_box";
import BottomBar from "../components/bottom_bar";
import timers from "../database";
import TimerEdittingModal from "../components/timer_editting_modal";
import BackgroundPickingModal from "../components/background_picking_modal";
import background_snow from "../images/background_snow.jpg"
import UserMgtModal from "../components/user_mgt_modal"
import UserInfoModal from "../components/user_info_modal"

function Home() {
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const [timerInEdit, setTimerInEdit] = useState(-1);
	const [showEdittingModal, setShowEdittingModal] = useState(false);
	const handleEClose = () => setShowEdittingModal(false);
	const handleEShow = (id) => {
		setShowEdittingModal(true);
		setTimerInEdit(id - 1)
	}



	const getAllTimerBoxes = () => {
		return allTimers.map((timer) => <TimerBox
			key={timer.id}
			id={timer.id}
			onDelete={deleteTimer}
			showEditModal={handleEShow}
			onEdit={editTimer}
			time={timer.time}
			description={timer.description}
		/>)
	}

	const deleteTimer = (id) => {
		setAllTimers((prevState) => {
			for (let i = 0; i < prevState.length; i++) {
				console.log("id" + id);
				// eslint-disable-next-line
				if (prevState[i].id == id) {
					console.log("delete!");
					prevState.splice(i, 1);
					break;
				}
			}
			console.log(prevState);
			return prevState;
		});
		setTimerBoxes(getAllTimerBoxes());
	}

	const editTimer = (newTimer) => {
		setAllTimers((prevState) => {
			for (let i = 0; i < prevState.length; i++) {
				// eslint-disable-next-line
				if (prevState[i].id == newTimer.id) {
					prevState[i] = newTimer;
					break;
				}
			}
			return prevState;
		});
		setTimerBoxes(getAllTimerBoxes());
	}

	const [allTimers, setAllTimers] = useState(timers);
	const [currId, setCurrId] = useState(allTimers.length + 1);
	const [timerBoxes, setTimerBoxes] = useState(getAllTimerBoxes());




	const [showBGModal, setShowBGModal] = useState(false);
	const handleBGClose = () => setShowBGModal(false);
	const handleBGShow = () => setShowBGModal(true);


	const addTimer = (newTimer) => {
		setAllTimers((prevState) => {
			prevState.push(newTimer);
			console.log(newTimer);
			return prevState;
		});
		setTimerBoxes(getAllTimerBoxes());
		setCurrId(prev => prev + 1);
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

	const [currentBG, setBG] = useState(backgrounds[0])
	const changeBG = (id) => setBG(backgrounds[id - 1])

	const [showUserModal, setShowUserModal] = useState(false)
	const handleUserShow = () => setShowUserModal(true)
	const handleUserClose = () => setShowUserModal(false)

	const [showUserInfoModal, setShowUserInfoModal] = useState(false)
	const handleUserInfoShow = () => setShowUserInfoModal(true)
	const handleUserInfoClose = () => setShowUserInfoModal(false)

	const [user, setUser] = useState({
		name: 'Sign in',
		isLoggedIn: false,
		email: '',
	})

	const userSignin = (user) => {
		setUser(user)
	}

	const userLogOff = () => {
		firebase.auth().signOut().then(() => {
			alert('Signed out!')
			setUser({
				name: 'Sign in',
				isLoggedIn: false,
				email: '',
			})
		}).catch((error) => {
			alert('Something went wrong... try again.')
			console.log(error)
		})
	}

	const changeUserStatus = () => {
		if (!user.isLoggedIn){
			console.log(user)
			handleUserShow()
		} else {
			handleUserInfoShow()
		}
	}

	return (
		<BackgroundContainer image={currentBG}>
			<BackgroundBlur useBlur={!currentBG.isColor}>
				<TimersGrid>
					{timerBoxes}
				</TimersGrid>
				<UserMgtModal
					showModal={showUserModal}
					handleClose={handleUserClose}
					login={userSignin}
				/>
				<UserInfoModal
					showModal={showUserInfoModal}
					handleClose={handleUserInfoClose}
					user={user}
					logoff={userLogOff}
				/>
				<TimerEdittingModal
					showModal={showModal}
					handleClose={handleClose}
					onSubmit={addTimer}
					newId={currId}
				/>
				<TimerEdittingModal
					showModal={showEdittingModal}
					handleClose={handleEClose}
					onSubmit={editTimer}
					timer={allTimers[timerInEdit]}
				/>
				<BackgroundPickingModal
					showBGModal={showBGModal}
					handleBGClose={handleBGClose}
					handleBGShow={handleBGShow}
					saveBackground={changeBG}
					backgrounds={backgrounds}
					currentBG={currentBG.id}
				/>
				<BottomBar
					changeUserStatus={changeUserStatus}
					addNewTimer={handleShow}
					changeBackground={handleBGShow}
					user={user}
					userSignin={userSignin}
				/>
			</BackgroundBlur>
		</BackgroundContainer>
	);
}

export default Home;