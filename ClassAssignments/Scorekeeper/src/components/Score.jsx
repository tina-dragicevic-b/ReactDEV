function Score (props) {

    return (
      <>
        <div>
          <p className="score" style={{ color: "#e59500", fontFamily: "cursive" }}>
            {props.scoreT1} : {props.scoreT2}
          </p>
        </div>
      </>
    );

} export default Score;