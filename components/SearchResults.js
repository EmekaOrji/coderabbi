import SourceImage from './SourceSVG';

export default function SearchResults() {
	return (
		<section id='searchResults'>
			<div className='search-results__content container'>Search Results</div>
			<SourceImage.FreeCodeCamp />
			<div className='search-results__content container'>Search Results</div>
		</section>
	);
}

const Result = () => (
	<div className='result__container'>
		<div className='ratings'>
			<button className='upvote secondary'></button>
			<button className='downvote secondary'></button>
		</div>
		<div className='result__card'>
			<div className='result__heading'>
				<h3>How do I get started in coding?</h3>
				<a
					href='http://stackoverflow.com'
					className='source-icon'
					target='_blank'
					rel='noopener noreferrer'></a>
			</div>
			<div className='result__text'>
				<p>
					You can get started in coding by first having a passion for it, desire
					it, be determined to learn and become the best you can be. Also,
					surpass your own limits and no matter what don...
				</p>
			</div>
			<div className='result__owner'>
				<a href=''></a>
			</div>
			<div className='result__stats'>
				<a href=''></a>
			</div>

			<button className='bookmark secondary'>
				<svg
					width='23'
					height='27'
					viewBox='0 0 23 27'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M15.3763 0.5C19.6163 0.5 22.0487 2.59875 22.0487 6.255V24.425C22.0487 25.1875 21.6562 25.8738 20.9963 26.2575C20.3388 26.6425 19.5462 26.65 18.8813 26.275L11.4312 22.0662L3.9125 26.2838C3.5875 26.4663 3.23125 26.5588 2.87375 26.5588C2.505 26.5588 2.13625 26.46 1.80125 26.2625C1.1425 25.8787 0.75 25.1925 0.75 24.4313V6.02625C0.75 2.51375 3.18375 0.5 7.4275 0.5H15.3763ZM15.3763 2.375H7.4275C4.24125 2.375 2.625 3.6025 2.625 6.02625V24.4313C2.625 24.5487 2.6925 24.6125 2.74875 24.645C2.805 24.68 2.89375 24.705 2.99625 24.6475L10.9738 20.1725C11.2587 20.0138 11.6075 20.0125 11.8938 20.1737L19.8025 24.6413C19.9062 24.7013 19.995 24.6737 20.0513 24.64C20.1075 24.6063 20.1737 24.5425 20.1737 24.425L20.1733 6.11256C20.1638 5.03672 19.9557 2.375 15.3763 2.375ZM15.9248 8.91062C16.4423 8.91062 16.8622 9.33062 16.8622 9.84812C16.8622 10.3656 16.4423 10.7856 15.9248 10.7856H6.77725C6.25975 10.7856 5.83975 10.3656 5.83975 9.84812C5.83975 9.33062 6.25975 8.91062 6.77725 8.91062H15.9248Z'
						fill='#FF6464'
					/>
				</svg>
			</button>
		</div>
	</div>
);
