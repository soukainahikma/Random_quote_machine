import Quotes from "./Components/Quotes";
import Next from "./Components/Next";
import { useState } from 'react';
import "./App.css"
function App() {
	const quotes = [{ quote: "This is quote1", author: "author1", color: '#C35841' },
	{ quote: "This is quote2", author: "author2", color: "#155D60" },
	{ quote: "This is quote3", author: "author3", color: "#872FB9" },
	{ quote: "This is quote4", author: "author4", color: "#75AB3D" },
	{ quote: "This is quote5", author: "author5", color: "#98952A" }]
	const [quote, setQuote] = useState(quotes[0]);
	return (
		<header style={{ backgroundColor: quote.color }}>
			<div id='quote-box' className="container">
				<Quotes quote={quote} color={quote.color}/>
				<hr />
				<Next next={setQuote} items={quotes} color={quote.color}/>
			</div>
		</header>

	);
}

export default App;
