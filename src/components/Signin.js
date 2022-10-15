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
                        <h4>Signin</h4>
                    <p>Create Account</p>
                    
                    
                    <div style={{flexDirection:"column"}}>
                        <p>  
                        <label>mobilenumber</label> <br/><br/>
                        <input type="mobile" name="mobilenumber" value={mobilenumber} onChange={changeHandler} /><br/>
                        </p>

                        <p>
                        <label>password</label> <br/><br/>
                        <input type="password" name="password" value={password} onChange={changeHandler} /><br/>
                        </p>
                    
                       
                    </div>

                    </div>
                    <p>Have trouble signing in ?<a href="#">Get Help</a></p>
                    <input type="submit" name="submit" className="submit-btn"/>


                   

                </form>
                <div className="picture">
                <img src='https://www.srisailadevasthanam.org/static/media/sd-signin-image.28ef34d1.jpg' />

                </div>

            </left>
        </div>



    )





}

export default App1