const InputField = ({field, register, errors}) => {

    const isPattern = () => {
     if(field.pattern){
      return field.pattern.value
     } return ""
    }

    return (
      <>
        <div style={{display: "grid", justifyContent: "space-evenly", marginBottom: "20px", paddingLeft: '10px', paddingRight: '10px'}}>
          <input
          className="inputField"
            placeholder={field.label}
            type={field.type}
            id={field.name}
            {...register(field.name, { required: field.required.value, pattern: isPattern() })}
          />
          {errors[field.name] && <span style={{fontSize: '20px', fontFamily: 'cursive'}} className="p3"> {field.required.message}</span>}
        </div>
      </>
    );
}; export default InputField