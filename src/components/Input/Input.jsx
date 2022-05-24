/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

const Input = () => {
	const styles = {
		input: css`
			display: block;
			padding: 1rem 1.5rem;
			border-radius: 1.5rem;
			font-size: 16px;
			border: 2px solid transparent;
			width: 100%;
			transition: 0.3s;
			box-shadow: 0 0.5rem 1.5rem #f1356d30;
			margin: 1rem 0;

			&:focus {
				outline: none;
				border: 2px solid #f1356d;
			}
		`,
		button: css`
			display: block;
			width: 100%;
			padding: 1rem 1.5rem;
			font-size: 16px;
			cursor: pointer;
			border-radius: 1.5rem;
			border: none;
			background: #f1356d;
			color: white;
			font-weight: 700;
		`,
		result: css`
			text-align: center;
			margin: 3rem 0;
			padding: 1rem 1.5rem;
			background: #f2f2f2;
			border-radius: 1.5rem;
			box-shadow: inset 0 0.5rem 0.5rem #00000005;
			min-height: 52px;
			transition: 0.3s;
			word-break: break-all;
		`,
	};

	const [value, setValue] = useState('Type something to see it here');

	const handleClick = () => {};

	return (
		<>
			<input
				css={styles.input}
				type="text"
				id="myInput"
				onChange={e => {
					setValue(e.target.value);
				}}
				placeholder="Type something here ..."
			/>
			<button css={styles.button} onClick={handleClick}>
				Klik her
			</button>
			<p css={styles.result}>{value}</p>
		</>
	);
};

export default Input;
