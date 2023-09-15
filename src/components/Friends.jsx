import React, { useState } from 'react';
import styled from 'styled-components';

const Friend = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 0 20px;
	border: 1px solid gold;
	> .buttons {
		> button {
			margin-right: 10px;
			&:last-child {
				margin: 0;
			}
		}
	}
`;
const Friends = ({ id, name, phone, fnDel, fnEdit }) => {
	return (
		<Friend key={id}>
			<p>{id}</p>
			<p>{name}</p>
			<p>{phone}</p>
			<div className="buttons">
				<button
					onClick={(evt) => {
						fnEdit(name, phone);
					}}
				>
					수정
				</button>
				<button
					onClick={() => {
						fnDel(id);
					}}
				>
					삭제
				</button>
			</div>
		</Friend>
	);
};

export default Friends;
