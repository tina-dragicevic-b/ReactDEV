import { useForm } from "react-hook-form";
const InputField = ({field}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
    // console.log(field)
    const fieldRegister = Object.keys(field)[0];
// console.log(fieldRegister)
    let entries = Object.entries(field)
    let data = entries.map( ([key, value] = entry) => {
        // console.log(key, value)
        // let data2 = value.map( (key2, value2) => {
        //     console.log(key2, value2)
        // })
        let e = Object.entries(value)
        // e.map( ([key2, val2]) => {
        //     console.log(key2, val2)
        // })
        // console.log(errors[Object.keys(field)[0]])
        // console.log(e[0][1], e[1])
    })

    // console.log("Entries: ", entries)

    const isUndefinedPattern = () => {
        Object.keys(field)[0], {
            required: Object.entries(field).map(([key, value] = entry) => {
                // console.log(typeof Object.entries(value)[1] === 'undefined')
                // return (typeof Object.entries(value)[1] === 'undefined')
                if(typeof Object.entries(value)[1] === 'undefined') return null
                else {
                    // console.log(Object.entries(value)[1][1])
                    return Object.entries(value)[1][1]
                    // return {
                    //     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    //     message: "Email is not valid."
                    //   }
                }
            }),
        }
        // return !Object.entries(value)[1]
    }
    return (
      <>
        <div>
          {/* {Object.keys(field)} */}
          {/* {Object.values(field)} */}
        </div>
        <div>
          <div>
            <label>{Object.keys(field)[0]} ova labela</label>
            <input
              type="text"
              // {...register("fild", {
                {...register(`${Object.keys(field)[0]}`, {
                required: Object.entries(field).map(([key, value] = entry) => {
                  Object.entries(value)[0][1];
                }),
                pattern: isUndefinedPattern(),
              })}
            />
            {errors[Object.keys(field)[0]] && errors[Object.keys(field)[0]].type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
            {/* {errors[`${Object.keys(field)[0]}`] || <p className="errorMsg">{errors[`${Object.keys(field)[0]}`].message}sdffsdsfd</p>} */}
          </div>
          <div></div>
          <div></div>
        </div>
      </>
    );
}; export default InputField