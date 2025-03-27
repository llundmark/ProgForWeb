import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const emptyDiv = document.querySelector("#output");
  const outputDiv = document.createElement("div");
  function processInput(data){
    console.log(data.firstName);
    outputDiv.innerHTML = '<h4>Personal Data</h4><div class="form-group"><label>First Name</label><p>' + data.firstName + 
    '</p></div><div class="form-group"><label>Last Name</label><p>'+ data.lastName +
    '</p></div><div className="form-group"><label>Address</label><p>' + data.address + 
    '</p></div><div className="form-group"><label>State</label><p>' + data.state + 
    '</p></div> <div className="form-group"><label>Country</label><p>' + data.country + 
    '</p></div><div className="form-group"><label>Favorite Alpaca Colors</label><p>'+ data.favCol +
    '</p></div><div className="form-group"><label>What I Like About Alpacas</label><p>'+ data.alpacaEssay +
    '</p></div>'
    emptyDiv.appendChild(outputDiv);
  }
  return (
    /*First name and last name (text inputs)
      Street address (text input)
      State/Province (text input or select menu)
      Country (text input)
      Favorite alpaca colors (checkbox group)*/
      <div>
        <form onSubmit={handleSubmit(processInput)}>
          <fieldset>
            <legend>Personal Data</legend>
            <div className="form-group">
              <label htmlFor='firstName' className="required">First Name</label>
              <input type="text" id="firstName" {...register("firstName", {required:true})}/>
              {errors.firstName ? (<em className="error">First Name Required</em>) : <></>}
            </div>
            <div className="form-group">
              <label htmlFor='lastName' className="required">Last Name</label>
              <input type="text" id="lastName" {...register("lastName", {required:true})}/>
              {errors.lastName ? (<em className="error">Last Name Required</em>) : <></>}
            </div>
            <div className="form-group">
              <label htmlFor='address'>Street Address</label>
              <input type="text" id="address"{...register("address")}/>
            </div>
            <div className="form-group">
              <label htmlFor='state'>State</label>
            <select id="state" {...register("state")}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="AS">American Samoa</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">MIchigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="TT">Trust Territories</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="VI">Virgin Islands</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            </select>
            </div>
            <div className="form-group">
              <label htmlFor='country'>Country</label>
              <input type="text" id="country"{...register("country")}/>
            </div>
          </fieldset>

          <fieldset>
            <legend>Alpaca Preferences</legend>
            <div className="form-group">
              <p>Favorite Alpaca Color</p>
              <label>
              Red <input type="checkbox" value="red" {...register("favCol")}/>
              </label>
              <label>
              White <input type="checkbox" value="white" {...register("favCol")}/>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">What do you like about Alpacas?
                <textarea {...register("alpacaEssay")}></textarea>
              </label>
            </div>
          </fieldset>
          
          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default App
