
function Quotes(props)
{
	return(
		<h1>
			<i className="fas fa-quote-left"></i>
			<span className="quote" id="quote">{props.quote.quote}</span>
			<i className="fas fa-quote-right"></i>
			<p className="author" id="author">- {props.quote.author}</p>
		</h1>
	)
}
export default Quotes;