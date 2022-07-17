import './App.css';
import Balance from './balance';
import Atm from './atm';
import Login from './login';
import { useState } from 'react';
import { useSelector } from 'react-redux'
function App() {
	
	const user = useSelector(state => state.user)


	return (
		<div className='App'>
			{user.isLoggedIn ? (
				<div>
					<h2>Welcome, {user.username}</h2>
					<Balance />
					<Atm />
				</div>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
