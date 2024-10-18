import {useContext} from 'react'
import {UserContext} from '../context/UserContext';


export const User = () => {

	const {
		isLoggedIn,
		setIsLoggedIn,
		userName,
		setUserName
	} = useContext(UserContext)

	return (
		<div style={{border: '5px solid orange', margin: '1em', padding: '1em'}}>
			<h3>{isLoggedIn ? userName : 'Anonymous user / not logged in'}</h3>

			<button onClick={() => {
				setIsLoggedIn(true)
				setUserName('Karel Vomacka')
			}}>Log In</button>

			<button onClick={() => {
				setIsLoggedIn(false)
				setUserName('')
			}}>Log Out</button>
		</div>
	);
}

export default User;