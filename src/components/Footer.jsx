import React from 'react';
import styled from 'styled-components';

const FooterBy = styled.p`
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
`;
const Footer = () => {
	return (
		<FooterBy>
			<small>&copy;Designed by 전인배</small>
		</FooterBy>
	);
};

export default Footer;
