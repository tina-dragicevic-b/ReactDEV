import { useState } from 'react'
import Panel from './components/Panel';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Panel />
    </div>
  )
}

export default App
