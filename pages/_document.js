import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className='light-mode'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>

				{/* Open Sans */}
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap'
					rel='stylesheet'
				/>

				{/* Merriweather Sans */}
				<link
					href='https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap'
					rel='stylesheet'
				/>

				{/* Work Sans */}
				<link
					href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500&display=swap'
					rel='stylesheet'
				/>

				{/* Montserrat & Poppins */}
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
