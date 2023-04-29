import axios from "axios";

const url = 'https://opentdb.com/'

export const getCategory = async () => {
    return await axios.get(url + 'api_category.php')
}

export async function renderGame(numberOfQuestions, category, difficulty) {
    return await axios.get(url + "api.php" + `?amount=${numberOfQuestions}` + `&category=${category}` + `&difficulty=${difficulty}`)
}