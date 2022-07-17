import { useDispatch } from 'react-redux';
import { login } from './redux/actions/user.actions';
import { useState } from 'react';
const Login = () => {
	const [username, setUsername] = useState('');
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(login(username));
	};
	return (
		<div>
			<input
				type='text'
				id='username'
				name='username'
				placeholder='Username'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
