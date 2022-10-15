import React,{useState} from "react";


const App1 = () => {
    const [data,setdata] = useState({
        displayname : '',
        mobilenumber : '',
        password:'',
        confirmpassword:'',

    })
    const {displayname,mobilenumber,password,confirmpassword} = data;
    const changeHandler = e =>{

        setdata({...data,[e.target.name]:[e.target.value]})
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
        
        

    }

    return (
        <div className="signup-form1">
           
            <left className='special'>
                <form onSubmit={submitHandler} >
                    <div className='signup-form'>
                    <h4>Signup</h4>
            <p>Create Account</p>
                    <div>
                        <p>
                        <label>displayname</label> <br/>
                        <input type="text" name="displayname" value={displayname} onChange={changeHandler} /><br/>
                        </p>

                        <p>  
                        <label>mobilenumber</label> <br/>
                        <input type="mobile" name="mobilenumber" value={mobilenumber} onChange={changeHandler} /><br/>
                        </p>
                       
                    </div>
                    <div>
                    <p>
                        <label>password</label> <br/>
                        <input type="password" name="password" value={password} onChange={changeHandler} /><br/>
                        </p>
                        <p>
                    <label>confirmpassword</label> <br/>
                    <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} /><br/>
                    </p>
                    </div>
                    </div>
                    <p>Loremipsum is simply dummy content for websit</p>
                    <input type="submit" name="submit" className="submit-btn"/>


                    <div style={{borderTop:'1px solid blue', marginTop:'30px'}}>
                        <p>Already have an a Account? Signin</p>

                    </div>

                </form>
                <div className="picture">
                <img src='https://www.srisailadevasthanam.org/static/media/sd-signin-image.28ef34d1.jpg' />

                </div>

            </left>
        </div>



    )





}

export default App1