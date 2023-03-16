import PanelBody from "./PanelBody";
import PanelHeader from "./PanelHeader";
function Panel()  {
    return (
      <>
        <div className="panel">
            <PanelHeader />
          {/* <p style={{ color: '#002642' }}>affaaf</p> */}
          <PanelBody />
        </div>
      </>
    );
} export default Panel