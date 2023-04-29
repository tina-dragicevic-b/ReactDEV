function ScoreButton(props) {

    function handleClick(){
        props.action();
    }
    console.log(props.score)
    return (
        <>
        <button onClick={handleClick} className="button">{props.icon}</button>
        </>
    )
}
export default ScoreButton;