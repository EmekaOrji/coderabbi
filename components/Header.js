import Image from 'next/image';
import Link from 'next/link';
import logo from '../media/logo/logo.svg';

export default function Header() {
	return (
		<>
			<header>
				<div className='header__content container'>
					<p>
						Find your answers fast with{' '}
						<cite>
							Code<span>Rabbi</span>
						</cite>
					</p>
				</div>
			</header>
		</>
	);
}
