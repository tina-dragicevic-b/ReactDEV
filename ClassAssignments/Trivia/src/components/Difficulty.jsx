const Difficulty = ({difficulty, changeDifficulty}) => {

    return (
      <>
        <label className="label">Difficulty</label>
        <select
          className="selector"
          value={difficulty}
          onChange={changeDifficulty}
        >
          <option value={0}>Any difficulty</option>
          <option value={"easy"}>Easy</option>
          <option value={"medium"}>Medium</option>
          <option value={"hard"}>Hard</option>
        </select>
      </>
    );
}; export default Difficulty;