import { useState } from 'react'
import './App.css'
import { inputFields } from './utils/index'
// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import InputField from './components/InputField'
function App() {
  const [inputFields_, setInputFields] = useState(inputFields())
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
const onSubmit = () => {
  console.log("submitanooooo")
  console.log(errors)
}
  // console.log(...inputFields_)

// const x = inputFields_.map((key, value) => (
//   console.log("key: ", key, ", value: ", value)
// ))
  return (
    <div className="App">
      <div className="panel">
        <p className="p1">nEKAKAV teskt za provjericu; srcekooo</p>
        <p className="p2">nEKAKAV teskt za provjericu; srcekooo</p>
        <p className="p3">nEKAKAV teskt za provjericu; srcekooo</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        {inputFields_.map((object, index) => (
          // <div key={index}>{object}</div>
        <InputField key={index} field={object.field}/>
        ))}
        <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App
