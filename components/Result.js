import React, { useState } from 'react';

export default function Result(props) {
	const [bookmarked, setBookmarked] = useState(false);
	const result = props.searchResult;

	return (
		<div className='result-container'>
			<div
				className='result'
				style={{ borderBlockStartColor: props.sourceInfo.color }}>
				<div className='result__card'>
					<div className='result__heading'>
						<h3>{result.title}</h3>
						<a href='http://stackoverflow.com' className='source-icon'>
							<props.sourceInfo.Image />
						</a>
					</div>
					<div className='result__text'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							minus facilis veritatis earum harum, dolorem dignissimos culpa
							mollitia beatae accusantium libero? Ducimus dignissimos impedit
							laboriosam, dolores architecto veritatis tempore quibusdam?
						</p>
					</div>
					<div className='result__owner'>
						<a href='https://fonts.google.com'>
							<div className='result__owner__avatar'>
								<img src={result.owner.profile_image} alt='' />
							</div>
							&nbsp;
							<span className='result__owner__name'>
								{result.owner.display_name || 'Anonymous'}
							</span>
						</a>
					</div>
					<div className='result__stats'>
						<div className='result__stats__views'>
							<span className='result__stats__views__icon'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z'
										stroke='var(--icons-color, #727272)'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
										stroke='var(--icons-color, #727272)'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							&nbsp;
							<span className='result__stats__views__number'>
								{result.view_count > 1100
									? (result.view_count / 1000).toFixed(1) + 'K'
									: result.view_count}
							</span>
						</div>
						<div className='result__stats__likes tertiary'>
							<span className='result__stats__likes__icon'>
								<svg
									width='22'
									height='20'
									viewBox='0 0 22 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<defs>
										<filter id='likesShadow'>
											<feDropShadow
												id='likesShadowInner'
												dx='0.5'
												dy='0.5'
												stdDeviation='1'
												floodColor='#00000055'
												floodOpacity='0'
											/>
										</filter>
									</defs>
									<path
										d='M19.8401 2.61012C19.3294 2.09912 18.7229 1.69376 18.0555 1.4172C17.388 1.14064 16.6726 0.998291 15.9501 0.998291C15.2276 0.998291 14.5122 1.14064 13.8448 1.4172C13.1773 1.69376 12.5709 2.09912 12.0601 2.61012L11.0001 3.67012L9.94012 2.61012C8.90843 1.57842 7.50915 0.998826 6.05012 0.998826C4.59109 0.998826 3.19181 1.57842 2.16012 2.61012C1.12843 3.64181 0.548828 5.04108 0.548828 6.50012C0.548828 7.95915 1.12843 9.35842 2.16012 10.3901L3.22012 11.4501L11.0001 19.2301L18.7801 11.4501L19.8401 10.3901C20.3511 9.87936 20.7565 9.27293 21.033 8.60547C21.3096 7.93801 21.4519 7.2226 21.4519 6.50012C21.4519 5.77763 21.3096 5.06222 21.033 4.39476C20.7565 3.7273 20.3511 3.12087 19.8401 2.61012Z'
										fill={result.score > 0 ? '#FF6464' : '#DADADA'}
										filter='url(#likesShadow)'
									/>
								</svg>
							</span>
							&nbsp;
							<span className='result__stats__likes__number'>
								{result.score > 1100
									? (result.score / 1000).toFixed(1) + 'K'
									: result.score}
							</span>
						</div>
						<button className='result__stats__share tertiary'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12'
									stroke='var(--icons-color, #727272)'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M16 6L12 2L8 6'
									stroke='var(--icons-color, #727272)'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12 2V15'
									stroke='var(--icons-color, #727272)'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						<button className='result__stats__more tertiary'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
									stroke='var(--icons-color, #727272)'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
									stroke='var(--icons-color, #727272)'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
									stroke='var(--icons-color, #727272)'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
					<button className='bookmark tertiary'>
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
		</div>
	);
}
