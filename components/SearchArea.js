import { useState } from 'react';

export default function SearchArea() {
	const [inputFocused, setInputFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [radioValue, setRadioValue] = useState('mostRelevance');

	const handleCheckChange = (event) => {
		setRadioValue(event.target.value);
	};

	return (
		<>
			<form id='searchArea'>
				<div className='form__content container'>
					<div className='fieldset'>
						<div
							className='input-container'
							style={
								inputFocused
									? { backgroundColor: '#F2F2F299' }
									: { backgroundColor: '#F2F2F2FF' }
							}>
							<span className='search-icon'>
								<svg
									width='31'
									height='32'
									viewBox='0 0 31 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M15.1191 0.916748C22.9503 0.916748 29.3203 7.28675 29.3203 15.118C29.3203 18.8128 27.9024 22.1826 25.5821 24.7116L30.1478 29.2678C30.5751 29.6951 30.5765 30.3863 30.1493 30.8136C29.9363 31.0294 29.6549 31.1359 29.3749 31.1359C29.0963 31.1359 28.8163 31.0294 28.602 30.8165L23.9812 26.2086C21.5504 28.1553 18.4684 29.3207 15.1191 29.3207C7.28784 29.3207 0.916382 22.9492 0.916382 15.118C0.916382 7.28675 7.28784 0.916748 15.1191 0.916748ZM15.1191 3.10425C8.49388 3.10425 3.10388 8.49279 3.10388 15.118C3.10388 21.7432 8.49388 27.1332 15.1191 27.1332C21.7428 27.1332 27.1328 21.7432 27.1328 15.118C27.1328 8.49279 21.7428 3.10425 15.1191 3.10425Z'
										fill='#000000'
										fillOpacity={inputFocused ? '1' : '0.35'}
									/>
								</svg>
							</span>
							<input
								type='text'
								placeholder='Type your Question'
								value={inputValue}
								onChange={(event) => setInputValue(event.target.value)}
								onFocus={() => setInputFocused(true)}
								onBlur={() => setInputFocused(false)}
							/>
						</div>
						<button id='search'>Search</button>
					</div>

					<div className='fieldset-container'>
						<div className='fieldset' id='filter'>
							<RadioButton
								id='mostRelevance'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Most Relevant
							</RadioButton>
							<RadioButton
								id='mostRecent'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Most Recent
							</RadioButton>
							<RadioButton
								id='mostViewed'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Most Viewed
							</RadioButton>
							<RadioButton
								id='following'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Following
							</RadioButton>
							<RadioButton
								id='highestRating'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Highest Rating
							</RadioButton>
							<RadioButton
								id='mostShared'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Most Shared
							</RadioButton>
							<RadioButton
								id='bookmarked'
								radioValue={radioValue}
								onChange={handleCheckChange}>
								Bookmarked
							</RadioButton>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

const RadioButton = ({ id, radioValue, onChange, children }) => {
	return (
		<>
			<label>
				<input
					type='radio'
					id={id}
					value={id}
					checked={radioValue === id}
					onChange={onChange}
				/>
				<div className='radio-view button secondary'>{children}</div>
			</label>
		</>
	);
};
