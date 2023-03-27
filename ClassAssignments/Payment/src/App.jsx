import { useState } from 'react'
import './App.css'
import { inputFieldsDefinition } from './utils/index'
import { useForm } from "react-hook-form";
import InputField from './components/InputField'
import Country from './components/Country';
import PaymentMethod from './components/PaymentMethod';

function App() {
  const [inputFields, setInputFields] = useState(inputFieldsDefinition())
  const [paymentMethod, setPaymentMethod] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

function onSubmit (data) {
  setSubmitted(true)
  setData(data)
}
  return (
    <div className="App" style={{ textAlignLast: "center" }}>
      <div className="panel">
        <h2
          className="p1"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "cursive",
            textShadow: "1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          }}
        >
          Payment
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((field, index) => (
            <InputField
              key={index}
              field={field}
              register={register}
              errors={errors}
            />
          ))}
          {/*  */}
          <div
            className="grid-container"
            style={{ display: "grid", justifyContent: "space-evenly", paddingTop: '20px', marginBottom: '30px', border: '0.5px solid black', margin: '10px', paddingBottom: '15px' }}
          >
            <div style={{ gridColumn: "1 / 2", gridRow: "1", }}>
              <Country register={register} />
            </div>

            {/*  */}
            <div style={{ gridColumn: "2 / 3", gridRow: "1" }}>
              <PaymentMethod
                register={register}
                errors={errors}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
          </div>
          {/* <PaymentMethod errors={errors} {...register("payment", { required: true })}/> */}
          {/*  */}
          <input
            style={{ marginLeft: "10px" }}
            required
            type="checkbox"
          ></input>
          <label htmlFor="cars" style={{ fontFamily: "cursive" }}>
            I accept the terms
          </label>
          {/*  */}
          <br></br>
          <br></br>
          {!submitted && (
            <div style={{ textAlign: "center" }}>
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          )}
        </form>
        {submitted && (
          <div
            style={{
              marginLeft: "10px",
              lineHeight: "0.2",
              fontFamily: "cursive",
            }}
          >
            <h2>Delivery data: </h2>
            <p>
              {submittedData.lastName}, {submittedData.firstName}
            </p>
            <p>{submittedData.email}</p>
            <p>
              {submittedData.address}, {submittedData.country}
            </p>
            <p>paying {paymentMethod}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
