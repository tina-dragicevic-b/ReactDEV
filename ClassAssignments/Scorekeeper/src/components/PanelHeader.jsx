import Countdown from 'react-countdown';
function PanelHeader (props) {

  let date = new Date();
    return (
      <>
        <div className="grid-container" style={{ display: "grid", justifyContent: "space-evenly", padding: "10px"}}>
          <div style={{ gridColumn: "1 / 2", fontFamily: "fantasy", fontSize: "14px", color: "#e59500" }}>
          {date.toDateString()}
          </div>
          {props.rightColumn}
          {/* <div style={{ gridColumn: "3 / 4" }}>
          {date.toDateString()}
          </div>
          <div style={{ gridColumn: "4 / 5" }}>---</div> */}
        </div>
      </>
    );
} export default PanelHeader;