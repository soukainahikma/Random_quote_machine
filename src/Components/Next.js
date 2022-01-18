import '../App.css'
function Next(props) {
	function getNewQuote() {
		let num = Math.floor(props.items.length * Math.random());
		props.next(props.items[num]);
	}
	return (
		<div id='new-quote' className="buttons">
			<button style={{ backgroundColor: props.color }} className="twitter" ><a
				style={{ color: 'white' }}
				href="https://twitter.com/intent/tweet"
				target="_blank"
				rel="noreferrer" 
				id="tweet-quote"
				title="Tweet this quote!"
			>
				<i class="fab fa-twitter"></i>
			</a></button>
			<button style={{ backgroundColor: props.color }} className="next" onClick={getNewQuote}>Next quote</button>
		</div>
	)
}
export default Next;