import Body from '../components/Body';
import HeadTag from '../components/Head';

export async function getServerSideProps({ query }) {
	if (Object.keys(query).length === 0 || !query.search)
		return {
			props: {
				todos: null,
			},
		};

	const stackOverflowData = await fetch(
		// `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query.search}&site=stackoverflow`
		`https://jsonplaceholder.typicode.com/todos`
	);
	const stackOverflowResults = await stackOverflowData.json();

	return {
		props: {
			searchResults: {
				stackOverflowResults,
			},
		},
	};
}

export default function Home({ searchResults }) {
	return (
		<div className='flex-body'>
			<HeadTag />
			<Body searchResults={searchResults} />
		</div>
	);
}
