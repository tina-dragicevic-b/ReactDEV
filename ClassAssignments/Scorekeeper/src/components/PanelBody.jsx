import Team from "./Team";
import Score from "./Score";

function PanelBody({teamOne, teamTwo}) {

    return (
      <>
        <div className="grid-container" style={{ display: 'grid', justifyContent: 'space-evenly' }}>
          <div style={{gridColumn: '1 / 2'}}>
            <Team name={teamOne.name} image={teamOne.image}/>
          </div>
          <div style={{gridColumn: '2 / 3'}}>
            <Score scoreT1={teamOne.score} scoreT2={teamTwo.score}/>
          </div>
          <div style={{gridColumn: '3 / 4'}}>
            <Team name={teamTwo.name} image={teamTwo.image}/>
          </div>
        </div>
      </>
    );

} export default PanelBody;