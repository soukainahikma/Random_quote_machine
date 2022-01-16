
function Next(props) {
	function getNewQuote() {
		let num = Math.floor(props.items.length *Math.random());
		props.next(props.items[num]);
	}
	return (
		<div className="buttons">
			<button className="next" >Linkedin</button>
			<button className="next" onClick={getNewQuote}>Next quote</button>
		</div>
	)
}
export default Next;