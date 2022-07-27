import Result from './Result';
import sourceInfo from './SourceInfo';

export default function SearchResults({ searchResults }) {
	return (
		<section id='searchResults'>
			<div className='search-results__content container'>
				{searchResults?.stackOverflowResults.items.map((item) => (
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
