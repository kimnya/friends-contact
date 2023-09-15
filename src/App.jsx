import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { useRef, useState } from 'react';

const GlobalCss = createGlobalStyle`
*{margin: 0;padding: 0;}
ul,ol,li{list-style:none;}

`;
const Title = styled.h2`
	margin: 30px auto;
	text-align: center;
	font-weight: normal;
`;
const Container = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid gold;
`;

const initialData = [
	{
		id: 1,
		name: '둘리',
		phone: '010-1254-8526',
	},
	{ id: 2, name: '또치', phone: '010-3245-7896' },
	{ id: 3, name: '하니', phone: '010-8956-7412' },
	{
		id: 4,
		name: '마이콜',
		phone: '010-5647-9856',
	},
	{ id: 5, name: '도우너', phone: '010-7532-9854' },
];

function App() {
	const [book, setBook] = useState(initialData);
	const nextId = useRef(6);

	//추가함수
	const fnAdd = (username, phone) => {
		setBook((prev) => {
			return [
				...prev,
				{
					id: nextId.current,
					name: username,
					phone: phone,
					key: nextId.current,
				},
			];
		});
		nextId.current++;
	};

	//삭제함수
	const fnDel = (id) => {
		setBook((prevBook) =>
			prevBook.filter((book) => {
				return book.id !== id;
			})
		);
		nextId.current--;
	};
	const [inputs, setInputs] = useState({
		username: '',
		phonenum: '',
	});

	//수정함수
	const fnEdit = (name, phone) => {
		console.log(name, phone);
	};

	return (
		<>
			<GlobalCss />
			<Title>친구 연락처- 등록</Title>
			<Container>
				<Header fnAdd={fnAdd} fnEdit={fnEdit}></Header>
				<Section books={book} fnDel={fnDel} fnEdit={fnEdit}>
					안녕
				</Section>
				<Footer />
			</Container>
		</>
	);
}

export default App;
