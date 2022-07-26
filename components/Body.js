import Header from '../components/Header';
import Main from '../components/main';

export default function Body({ searchResults }) {
	return (
		<>
			<Header />
			<Main searchResults={searchResults} />
		</>
	);
}
