import './FormContainer.css'

function FormContainer(){
        return(
            <div className="form-container">
            <form>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type="text" name = "username"/>
                </label><br></br>

                <label>
                    Password:
                    <input type="password" name = "password"/>
                </label><br></br>
                <button type= "submit">Submit</button>

                
                <form className="signup-form">
                    <h2>Sign up</h2>
                <label>
                    Email:
                    <input type="text" name = "email"/>
                </label><br></br>
                <label>
                    Password:
                    <input type="password" name = "password"/>
                </label><br></br>
                <button type= "submit">Register</button>

                </form>

            </form>
            </div>

        );

}
export default FormContainer;