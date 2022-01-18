
function Quotes(props)
{
	return(
		<h1>
			<i style={{ color: props.color }} className="fas fa-quote-left"></i>
			<span className="quote" id="text">   {props.quote.quote}   </span>
			<i style={{ color: props.color }}  className="fas fa-quote-right"></i>
			<p className="author" id="author">- {props.quote.author}</p>
		</h1>
	)
}
export default Quotes;