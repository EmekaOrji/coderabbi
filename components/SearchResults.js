import Result from './Result';
import sourceInfo from './SourceInfo';
import searchResults from '../data/stacoverflow.json';

export default function SearchResults() {
	console.log(searchResults.items);
	return (
		<section id='searchResults'>
			<div className='search-results__content container'>
				{searchResults.items.map((item) => (
					<Result
						sourceInfo={sourceInfo.StackOverflow}
						key={item.question_id}
						searchResult={item}
					/>
				))}
				{/* <Result sourceInfo={sourceInfo.CodeGrepper} />
				<Result sourceInfo={sourceInfo.CssTricks} />
				<Result sourceInfo={sourceInfo.Hashnode} />
				<Result sourceInfo={sourceInfo.Reddit} /> */}
			</div>
		</section>
	);
}
