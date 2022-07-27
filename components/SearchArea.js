import { useState } from 'react';
import { useRouter } from 'next/router';
import RadioButton from './RadioButton';

export default function SearchArea() {
	const [inputFocused, setInputFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [radioValue, setRadioValue] = useState('mostRelevance');
	const router = useRouter();

	function changeColorMode() {
		if (document.querySelector('html').classList.contains('dark-mode')) {
			document.querySelector('html').classList.remove('dark-mode');
			document.querySelector('html').classList.add('light-mode');
		} else {
			document.querySelector('html').classList.remove('light-mode');
			document.querySelector('html').classList.add('dark-mode');
		}
		// document.querySelector('html').classList.add('dark-mode');
	}

	const handleCheckChange = (event) => {
		setRadioValue(event.target.value);
	};

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()} id='searchArea'>
				<div className='form__content container'>
					<div className='fieldset'>
						<div
							className='input-container'
							style={
								inputFocused
									? {
											backgroundColor:
												'var(--text-color-input-focused, #F2F2F299)',
									  }
									: {
											backgroundColor: 'var(--text-color-input, #F2F2F2FF)',
									  }
							}
							tabIndex='0'
							onFocus={(event) =>
								event.currentTarget.querySelector('input').focus()
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
										fill='var(--text-color-primary, #000000)'
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
								onKeyPress={(e) => {
									if (e.which === 13) {
										router.push(`?search=${inputValue}`);
									}
								}}
							/>
						</div>
						<button
							className='primary'
							type='button'
							id='search'
							onClick={() => router.push(`?search=${inputValue}`)}>
							Search
						</button>
						{/* <div className='warning'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
								<path
									d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z'
									fill='#FFFFFF'
								/>
							</svg>{' '}
							Search feature currently down
						</div> */}
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
