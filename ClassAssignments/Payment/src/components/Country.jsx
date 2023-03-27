import { countriesDefinition } from "../utils";

const Country = ({register}) => {

    const countries = countriesDefinition()

    return (
        <div >
        <label style={{fontFamily: 'cursive', paddingRight: '20px', fontSize: '20px'}} htmlFor="cars">Country:</label>

        <select style={{color: '#ecb8a5', width: '200px', height: '30px', borderRadius: '10px'}}
        {...register("country", { required: true })}>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
            ))}
        </select>
        </div>
    )
}; export default Country