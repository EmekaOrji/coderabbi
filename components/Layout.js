import React from 'react';
import Nav from './nav';
import Footer from './footer';

export default function Layout({ children }) {
	return (
		<div className={'flex-body'}>
			<Nav />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
