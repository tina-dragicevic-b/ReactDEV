import ScoreButton from "./ScoreButton";

function PanelFooter ({teamOne, actionT1}) {

  // function scoreTeamOne() {
  //   teamOne[1](teamOne[0].score.name, teamOne[0].score.image, teamOne[0].score + 1)
  // }
    return (
      <>
        <div
          className="grid-container"
          style={{ display: "grid", justifyContent: "space-evenly" }}
        >
          <div style={{ gridColumn: "1 / 2" }}><ScoreButton action={actionT1} icon="+"/></div>
          {/* <div style={{ gridColumn: "2 / 3" }}><ScoreButton action={} icon="-"/></div>
          <div style={{ gridColumn: "6 / 7" }}><ScoreButton action={} icon="+"/></div>
          <div style={{ gridColumn: "7 / 8" }}><ScoreButton action={} icon="-"/></div> */}
        </div>
      </>
    );
} export default PanelFooter;