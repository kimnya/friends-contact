import React, { useState } from 'react';
import styled from 'styled-components';
import Friends from './Friends';
const FriendsList = styled.ul`
	width: 60%;
	height: 500px;
	margin: 0 auto;
	border: 1px solid black;
`;

const Section = ({ books, fnDel, fnEdit }) => {
	return (
		<FriendsList>
			{books.map((book) => {
				const { id, name, phone } = book;
				return <Friends id={id} name={name} phone={phone} key={id} fnDel={fnDel} fnEdit={fnEdit} />;
			})}
		</FriendsList>
	);
};

export default Section;
