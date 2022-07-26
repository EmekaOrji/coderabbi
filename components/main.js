import SearchArea from '../components/SearchArea';
import Guide from './Guide';
import SearchResults from './SearchResults';

export default function Main({ searchResults }) {
	return (
		<main>
			<SearchArea />
			{/* <Guide /> */}
			<SearchResults searchResults={searchResults} />
		</main>
	);
}
