import '../styles/base.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/search-area.css';
import '../styles/home/guide.css';
import '../styles/search-results.css';
import '../styles/global.css';
import '../styles/footer.css';

import { AuthContextProvider } from '../context/Auth';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';
import Layout from '../components/Layout';

const noAuthRequired = ['/', '/login', '/signup'];

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AuthContextProvider>
			<Layout>
				{noAuthRequired.includes(router.pathname) ? (
					<Component {...pageProps} />
				) : (
					<ProtectedRoute>
						<Component {...pageProps} />
					</ProtectedRoute>
				)}
			</Layout>
		</AuthContextProvider>
	);
}

export default MyApp;
