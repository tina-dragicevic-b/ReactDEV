import { useState, useEffect } from 'react'
import { Quiz } from './components/Quiz';
import { getCategory, renderGame } from './utils/api';
import NumberOfQuestions from './components/NumberOfQuestions'
import './index.css'
import Category from './components/Category';
import Difficulty from './components/Difficulty';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10)
  const [difficulty, setDifficulty] = useState(0)
  const [categories, setCategories] = useState([{
    id: 0,
    name: 'Any Category'
  }]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)
  const [generatedQuestions, setGeneratedQuestions] = useState(null);

  useEffect(() => {
    getCategory().then((response) => {
      setCategories( initialState => [
        ...initialState,
        ...response.data.trivia_categories,
      ]);
    }).catch(error => alter(error));
  }, []);

  const startGame = async () => {
      await renderGame(numberOfQuestions, selectedCategory, difficulty).then((response) => {
      setGeneratedQuestions(response.data.results)
      setStartQuiz(true)
    })
  }

  const playAgain = () => {
    setStartQuiz(false)
  }

  const changeNumberOfQuestions = (e) => {
    if(e.target.value >= 1 && e.target.value <= 50){
      setNumberOfQuestions(e.target.value)
    }
  }

  const changeCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const changeDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  return (
    <div>
      <hr></hr>
      <h1
        style={{ textAlign: "center", color: "#e3b505", fontFamily: "cursive" }}
      >
        ~ Trivia Quizzies 🤭 ~
      </h1>
      <hr></hr>

      {startQuiz ? (
        <Quiz questions={generatedQuestions} playAgain={playAgain} />
      ) : (
        <div
          className="grid-container startPage"
          style={{ display: "grid", justifyContent: "space-evenly" }}
        >
          <Category
            selectedCategory={selectedCategory}
            changeCategory={changeCategory}
            categories={categories}
          />

          <NumberOfQuestions
            numberOfQuestions={numberOfQuestions}
            changeNumberOfQuestions={changeNumberOfQuestions}
          />

          <Difficulty difficulty={difficulty} changeDifficulty={changeDifficulty}/>
          <button className="startButton" onClick={startGame}>
            Start
          </button>
        </div>
      )}
    </div>
  );
}

export default App
