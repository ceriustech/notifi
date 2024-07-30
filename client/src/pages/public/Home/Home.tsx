const Home = () => {
	return (
		<div>
			<header>
				<h1>Site Logo</h1>
				<h2>Site Name</h2>
				<nav>
					<a href="#how-it-works">How it Works</a>
					<a href="#faq">FAQ</a>
					<a href="/login">Login</a>
				</nav>
			</header>
			<section id="how-it-works">
				<h2>How it Works</h2>
				<p>Explanation of how it works.</p>
			</section>
			<section id="faq">
				<h2>FAQ</h2>
				<p>Frequently Asked Questions.</p>
			</section>
		</div>
	);
};

export default Home;
