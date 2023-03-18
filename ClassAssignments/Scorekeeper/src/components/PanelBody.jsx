import Team from "./Team";
import Score from "./Score";

function PanelBody({teamOne, teamTwo}) {

  // const [teamOne, setTeamOne] = useState({
  //   name: "Leicester City",
  //   image: "https://www.hub-soccer.com/wp-content/uploads/2022/02/Leicester-City-Logo-1.png",
  //   score: 0
  // })
  // const [teamTwo, setTeamTwo] = useState({
  //   name: "Liverpool",
  //   image: "  https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
  //   score: 0
  // })

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
            {/* <Team style={{gridColumn: '1 / 2'}}/>
            <Score style={{gridColumn: '2 / 3'}}/>
            <Team style={{gridColumn: '3 / 4'}}/> */}
        </div>
      </>
    );

} export default PanelBody;