import { useEffect, useState } from 'react';

export default function Header() {
	const [headerText, setHeaderText] = useState('first');

	useEffect(() => {
		let id = setTimeout(setHeaderText, 2500, 'second');

		return () => clearTimeout(id);
	}, []);

	return (
		<header>
			<div className='header__content container'>
				<p className={headerText === 'first' ? 'visible-header' : ''}>
					Find your answers fast with{' '}
					<cite>
						Code<span>Rabbi</span>
					</cite>
				</p>
				<p
					className={`header__main-text ${
						headerText === 'second' ? 'visible-header' : ''
					}`}>
					Type your Question, click search and wait for the results
				</p>
			</div>
		</header>
	);
}
