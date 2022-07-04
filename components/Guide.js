export default function Guide() {
	return (
		<>
			<section id='guide'>
				<div className='guide__content container'>
					<h3>{`Here's how this works`}</h3>

					<blockquote>
						<h3>Step</h3>
						<p>Type in your question in the “Search bar” above</p>
					</blockquote>

					<blockquote>
						<h3>Step</h3>
						<p>Click the Search button</p>
					</blockquote>

					<blockquote>
						<h3>Step</h3>
						<p>
							Wait for our algorithm to find the best suitable answer and bring
							them over to you.
						</p>
					</blockquote>
				</div>
			</section>
		</>
	);
}
