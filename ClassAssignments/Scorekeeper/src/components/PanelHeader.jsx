function PanelHeader () {
  let date = new Date();
    return (
      <>
        <div className="grid-container" style={{ display: "grid", justifyContent: "space-evenly", padding: "10px"}}>
          <div style={{ gridColumn: "1 / 2", fontFamily: "fantasy", fontSize: "14px", color: "#e59500" }}>
          {date.toDateString()}
          </div>
          <div style={{ gridColumn: "2 / 3" }}>
          {date.toDateString()}
          </div>
          <div style={{ gridColumn: "3 / 4" }}>
          {date.toDateString()}
          </div>
          {/* nekakav datum desno; minutaza u sredini; detalji i reset livo */}
        </div>
      </>
    );
} export default PanelHeader;