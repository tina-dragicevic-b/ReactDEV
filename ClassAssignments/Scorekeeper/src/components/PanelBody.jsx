import Team from "./Team";
import Score from "./Score";

function PanelBody() {

    return (
      <>
        <div className="grid-container" style={{ display: 'grid', justifyContent: 'space-evenly' }}>
          <div style={{gridColumn: '1 / 2'}}>
            <Team />
          </div>
          <div style={{gridColumn: '2 / 3'}}>
            <Score />
          </div>
          <div style={{gridColumn: '3 / 4'}}>
            <Team />
          </div>
            {/* <Team style={{gridColumn: '1 / 2'}}/>
            <Score style={{gridColumn: '2 / 3'}}/>
            <Team style={{gridColumn: '3 / 4'}}/> */}
        </div>
      </>
    );

} export default PanelBody;