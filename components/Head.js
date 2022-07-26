import Head from 'next/head';

export default function HeadTag() {
	return (
		<>
			<Head>
				<title>CodeRabbi</title>
				<meta
					name='description'
					content='Find answers to programming questions'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</>
	);
}
