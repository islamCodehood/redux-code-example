import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { depositAmount, withdrawAmount } from './actions.js';

const Atm = () => {
	const [amount, setAmount] = useState(0);

	const dispatch = useDispatch();

	const balance = useSelector(state => state);

	const deposit = () => {
		dispatch(depositAmount(amount));
	};

	const withdraw = () => {
		if (amount > balance) {
			alert('Not enough funds!');
			return;
		}
		dispatch(withdrawAmount(amount));
	};

	return (
		<>
			<input
				type='number'
				name='amount'
				id='amount'
				value={amount}
				onChange={e => setAmount(parseFloat(e.target.value))}
			/>
			<div className='btn-wrapper'>
				<button onClick={deposit}>Deposit</button>
				<button onClick={withdraw}>Withdraw</button>
			</div>
		</>
	);
};

export default Atm;
