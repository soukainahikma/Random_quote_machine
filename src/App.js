import Quotes from "./Components/Quotes";
import Next from "./Components/Next";
import { useState } from 'react';
import "./App.css"
function App() {
	const quotes = [{ quote: "This is quote1", author: "author1" },
	{ quote: "This is quote2", author: "author2" },
	{ quote: "This is quote3", author: "author3" },
	{ quote: "This is quote4", author: "author4" },
	{ quote: "This is quote5", author: "author5" }]
	const [quote,setQuote] = useState(quotes[0]);
	return (
		<div className="container">
			<Quotes quote={quote}/>
			<hr />
			<Next next={setQuote} items={quotes}/>
		</div>

	);
}

export default App;
