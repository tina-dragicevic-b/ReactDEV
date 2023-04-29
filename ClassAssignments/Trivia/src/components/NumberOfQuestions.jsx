const NumberOfQuestions = ({numberOfQuestions, changeNumberOfQuestions}) => {

    return (
      <>
        <label className="label">Number of questions</label>
        <input
          className="selector"
          type={"number"}
          value={numberOfQuestions}
          onChange={changeNumberOfQuestions}
        />
      </>
    );

}; export default NumberOfQuestions;