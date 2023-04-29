import { useEffect, useState } from "react";
import '../index.css'
export const Quiz = ({questions, playAgain}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentIndex]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [shuffled, setShuffled] = useState();
    const [correctAnswers, setCorrectAnswers] = useState(0)
    useEffect(() => {
      setConfirm(() => false);
      setSelectedAnswer(null)
      setCurrentQuestion(questions[currentIndex])
        var answers = [
            {
                isSelected: false,
                answer: currentQuestion.correct_answer
            }];

        currentQuestion.incorrect_answers.map((value) => {
            var newAnswer = {
                isSelected: false,
                answer: value
            }
            answers.push(newAnswer)
        })
        let currentIn = answers.length,  randomIndex;
      
        while (currentIn != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIn);
          currentIn--;
      
          [answers[currentIn], answers[randomIndex]] = [
            answers[randomIndex], answers[currentIn]];
        }
        setShuffled(() => answers)

    }, [currentQuestion, currentIndex]);

    useEffect(() => {
      if(confirm && selectedAnswer === currentQuestion.correct_answer){
        setCorrectAnswers(correctAnswers + 1)
      }
    }, [confirm]);

    const onClick = (answ, index) => {
        
        setSelectedAnswer(answ.answer)
        setShuffled((previous) => {
          const selected = [...previous];

          selected.map((value, i) => {
            if(i !== index){
              selected[i] = {
                ...selected[i],
                isSelected: false
              }
            } else {
              selected[index] = {
                ...selected[index],
                isSelected: true,
              };
            }
          })
          return selected
        })
    }

    return (
      <div>
        <h1 style={{color: '#e3b505', textAlign: 'center'}}>Question {currentIndex + 1}/{questions.length}</h1>
        
        <p style={{color: 'white', fontSize: '20px', textAlign: 'center'}}>{currentQuestion.question}</p>
        <div className="grid-container" style={{ display: 'grid', justifyContent: 'space-evenly' }}>
        <div style={{gridColumn: '1 / 2'}}>
        {shuffled !== undefined && (
          <div>
            {shuffled.map((answer, index) => (
                 <button
                 disabled={confirm}
                 key={index}
                 value={answer}
                 className={`answers ${answer.isSelected ? "selected" : ""}
                 ${(confirm && answer.isSelected && (answer.answer === currentQuestion.correct_answer)) 
                  || (confirm && !answer.isSelected && (answer.answer === currentQuestion.correct_answer))
                   ? "correct" : ""}
                 ${confirm && answer.isSelected && (answer.answer !== currentQuestion.correct_answer) ? "wrong" : ""}
                 `}
                 onClick={() => onClick(answer, index)}
               >
                 <h2>{answer.answer}</h2>
               </button>
            ))}
          </div>
        )}
        {selectedAnswer !== null && !confirm && <button className="startButton" onClick={() => setConfirm(true)}>Confirm</button>}
        {confirm && currentIndex !== questions.length - 1 && <button className="startButton" onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button>}
        </div>
        {confirm && currentIndex === questions.length - 1 && 
          <div style={{gridColumn: '2 / 3'}}>
            <h2 style={{color: '#db504a'}}>Finished! You've got {correctAnswers}/{questions.length} correct answers.</h2>
            <button className="startButton" onClick={playAgain}>Play again</button>
          </div>
        }
          </div>
      </div>
    );
}; export default Quiz;