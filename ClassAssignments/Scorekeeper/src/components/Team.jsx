function Team (props) {

    return (
      <>
        <div className="teamDiv">
          <img src={props.image} className="teamImage" />
          <p style={{color: "#e5dada", fontFamily: "fantasy"}}>{props.name}</p>
        </div>
      </>
    );

} export default Team;