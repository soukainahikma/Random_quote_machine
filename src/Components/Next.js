function getNewQuote()
{
	// document.getElementById("quote").innerHTML="test";
}
function Next()
{
	return(
		<div className="buttons">
			<button className="next" >Linkedin</button>
			<button className="next" onClick={getNewQuote()}>Next quote</button>
		</div>
	)
}
export default Next;