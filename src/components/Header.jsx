import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Form from './Form';

const FriendsAdd = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 60px;

	background-color: #9be3ee;
`;

const Header = ({ fnAdd, fnEdit }) => {
	return (
		<FriendsAdd>
			<Form fnAdd={fnAdd} fnEdit={fnEdit} />
		</FriendsAdd>
	);
};

export default Header;
