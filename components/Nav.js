import Image from 'next/image';
import Link from 'next/link';
import logo from '../media/logo/logo.svg';

export default function Nav() {
	return (
		<nav>
			<div className='nav__content container'>
				<div className='logo'>
					<Image src={logo} alt='</> CodeRabbi' priority />
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
