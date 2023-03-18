import PanelBody from "./PanelBody";
import PanelHeader from "./PanelHeader";
import PanelFooter from "./PanelFooter";
import { useState } from "react";
import ScoreButton from "./ScoreButton";

function Panel()  {

  const [teamOne, setTeamOne] = useState({
    name: "Leicester City",
    image: "https://www.hub-soccer.com/wp-content/uploads/2022/02/Leicester-City-Logo-1.png",
    score: 0
  })
  const [teamTwo, setTeamTwo] = useState({
    name: "Liverpool",
    image: "  https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
    score: 0
  })

  function scoreTeamOne() {
    setTeamOne({name: teamOne.name, image: teamOne.image, score: teamOne.score + 1})
  }
  function decreaseScoreTeamOne() {
    if(teamOne.score == 0) return;
    setTeamOne({name: teamOne.name, image: teamOne.image, score: teamOne.score - 1})
  }
  function scoreTeamTwo() {
    setTeamTwo({name: teamTwo.name, image: teamTwo.image, score: teamTwo.score + 1})
  }
  function decreaseScoreTeamTwo() {
    if(teamTwo.score == 0) return;
    setTeamTwo({name: teamTwo.name, image: teamTwo.image, score: teamTwo.score - 1})
  }
  function scoreNotZero(score) {
    console.log(score = 0)
    return score != 0;
  }

    return (
      <>
        <div className="panel">
          <PanelHeader />
          <PanelBody teamOne={teamOne} teamTwo={teamTwo}/>
          <div
          className="grid-container"
          style={{ display: "grid", justifyContent: "space-evenly" }}
        >
          <div className="scoreButton" style={{ gridColumn: "1 / 2" }}><ScoreButton disab={false} action={scoreTeamOne} icon="+"/></div>
          {/* <div style={{ gridColumn: "2 / 3" }}>
            {
            scoreNotZero(teamOne.score) ?
            <ScoreButton disab={false} action={decreaseScoreTeamOne} icon="-"/> :
            <ScoreButton disab={true} action={decreaseScoreTeamOne} icon="-"/>
            }
          </div> */}
          <div style={{ gridColumn: "2 / 3" }}>
            <ScoreButton disab={false} action={decreaseScoreTeamOne} icon="-"/>
          </div>
          <div style={{ gridColumn: "6 / 7" }}><ScoreButton disab={false} action={scoreTeamTwo} icon="+"/></div>
          {/* <div style={{ gridColumn: "7 / 8" }}>
            {
              scoreNotZero(teamTwo.score) ? 
              <ScoreButton disab={false} action={decreaseScoreTeamTwo} icon="-"/> :
              <ScoreButton disab={true} action={decreaseScoreTeamTwo} icon="-"/>
            }
            </div> */}
            <div style={{ gridColumn: "7 / 8" }}>
              <ScoreButton disab={false} action={decreaseScoreTeamTwo} icon="-"/>
            </div>
        </div>
        </div>
      </>
    );
} export default Panel