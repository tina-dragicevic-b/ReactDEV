function ScoreButton(props) {

    function handleClick(){
        props.action();
    }
    console.log(props.score)
    return (
        <>
        {/* {!props.score ? <button disabled onClick={handleClick} style={{backgroundColor: "#e5dada", color: "#002642"}}>{props.icon}</button> : 
        <button disabled onClick={handleClick} style={{backgroundColor: "#e5dada", color: "#002642"}}>{props.icon}</button> } */}
        {/* <button onClick={handleClick} style={{backgroundColor: '#e5dada', color: '#002642'}}>{props.icon}</button> */}
        <button onClick={handleClick} className="button">{props.icon}</button>
        </>
    )
}
export default ScoreButton;