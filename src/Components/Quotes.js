function Quotes(props)
{
	return(
		<h1>
			<i className="fas fa-quote-left"></i>
			<span className="quote" id="quote">{props.items[0].quote}</span>
			<i className="fas fa-quote-right"></i>
			<p className="author" id="author">- {props.items[0].author}</p>
		</h1>
	)
}
export default Quotes;