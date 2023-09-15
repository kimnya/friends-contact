import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Name = styled.input`
	width: 40%;
	height: 60%;
	padding-left: 20%;
`;
const PhoneNum = styled(Name)`
	width: 16%;
	padding-left: 8%;
`;

const Summit = styled.button`
	width: 70px;
	height: 40px;
`;
const initialData = {
	username: '',
	phone: '',
};

const Form = ({ fnAdd, fnEdit }) => {
	const [inputs, setInputs] = useState(initialData);
	const { username, phone } = inputs;
	const $input = useRef(null);

	const changeFn = (evt) => {
		//수정버튼이 클릭돼서 실행되면 ? setInputs = 해당 li의 name과 phone을 가져온다:
		// 밑에 있는 코드가 실행된다.

		const { id, value } = evt.target;
		console.log(evt.target.value);
		setInputs((prev) => {
			return {
				...prev,
				[id]: value,
			};
		});
	};

	return (
		<>
			<Name
				id="username"
				value={username}
				placeholder="친구이름"
				onChange={changeFn}
				autoComplete="off"
				autoFocus
				ref={$input}
			/>
			<PhoneNum
				id="phone"
				value={phone}
				placeholder="연락처"
				onChange={changeFn}
				autoComplete="off"
			/>
			<Summit
				onClick={(evt) => {
					evt.preventDefault();
					fnAdd(username, phone);
					setInputs(initialData);
					$input.current.focus();
				}}
			>
				확인
			</Summit>
		</>
	);
};

export default Form;
