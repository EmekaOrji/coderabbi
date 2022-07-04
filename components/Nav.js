import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<div className='nav__content container'>
				<div className='logo'>
					<img src='/logo.svg' alt='</> CodeRabbi' />
				</div>
				<div className='nav__links desktop'>
					<Link href='/'>Home</Link>
					<Link href='/about'>About</Link>
					<Link href='/bookmarks'>Your Bookmarks</Link>
					<Link href='/contact'>Contact</Link>
				</div>
			</div>
		</nav>
	);
}
