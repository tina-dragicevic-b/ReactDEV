import PanelBody from "./PanelBody";
import PanelHeader from "./PanelHeader";
import React, { useState } from "react";
import ScoreButton from "./ScoreButton";
import Countdown from 'react-countdown';

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

  let isCompleted = false;

  function scoreTeamOne() {
    if(isCompleted) return;
    setTeamOne({name: teamOne.name, image: teamOne.image, score: teamOne.score + 1})
  }
  function decreaseScoreTeamOne() {
    if(teamOne.score == 0 || isCompleted) return;
    setTeamOne({name: teamOne.name, image: teamOne.image, score: teamOne.score - 1})
  }
  function scoreTeamTwo() {
    if(isCompleted) return;
    setTeamTwo({name: teamTwo.name, image: teamTwo.image, score: teamTwo.score + 1})
  }
  function decreaseScoreTeamTwo() {
    if(teamTwo.score == 0 || isCompleted) return;
    setTeamTwo({name: teamTwo.name, image: teamTwo.image, score: teamTwo.score - 1})
  }

  let timeInMilliseconds = 180000;
  const timer = React.useRef(Date.now()).current + timeInMilliseconds;

  const GameFinished = () => <span style={{color: '#fff'}} >Finished!</span>;
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      isCompleted = completed
      return <GameFinished />;
    } else {
      return <span style={{color: '#fff'}} >{minutes}:{seconds}</span>;
    }
  };

  return (
      <>
        <div className="panel">
          <PanelHeader
            rightColumn={
              <div style={{ gridColumn: "2 / 3" }}>
                <Countdown date={timer} renderer={renderer} />
              </div>
            }
          />
          <PanelBody teamOne={teamOne} teamTwo={teamTwo} />
          <div
            className="grid-container"
            style={{ display: "grid", justifyContent: "space-evenly" }}
          >
            <div className="scoreButton" style={{ gridColumn: "1 / 2" }}>
              <ScoreButton disab={false} action={scoreTeamOne} icon="+" />
            </div>
            <div style={{ gridColumn: "2 / 3" }}>
              <ScoreButton
                disab={false}
                action={decreaseScoreTeamOne}
                icon="-"
              />
            </div>
            <div style={{ gridColumn: "6 / 7" }}>
              <ScoreButton disab={false} action={scoreTeamTwo} icon="+" />
            </div>
            <div style={{ gridColumn: "7 / 8" }}>
              <ScoreButton
                disab={false}
                action={decreaseScoreTeamTwo}
                icon="-"
              />
            </div>
          </div>
        </div>
      </>
    );
} export default Panel