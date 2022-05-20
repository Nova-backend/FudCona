import React, { useState} from "react";
import './Form.css';
import {Link, useNavigate} from 'react-router-dom';


function Form () {
    const [data, setData] = useState({
        login : '',
        password: ''
    })
    const Navigate = useNavigate();
    const getData = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const token = localStorage.getItem("token");
    const [response, setResponse] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault();
               await fetch(
            "http://196.223.240.154:8099/supapp/api/auth/signin",
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(data),
              authorization: "Bearer " + token
            }
          ).then((response) => {
            return response.json();
          }).then((data)=>{
             if(data.token.accessToken){
                localStorage.setItem("token", data.token.accessToken);
                setResponse("Login successfull");
                Navigate("/overview");
            }else{
                setResponse("Invalid credentials");
                Navigate("/signin");
            }
          });
     
        };
    
    return(
        <div className>
            <form action="" onSubmit={handleSubmit}>
                <div className="container">
                <svg className="top-svg" width="357" height="284" viewBox="0 0 357 284" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.8786 -35.774C139.775 -106.591 281.365 -78.5057 356.127 26.9566C336.317 105.079 213.326 -2.83818 113.43 67.979C13.5332 138.796 69.5306 284.642 -5.62989 283.408C-80.3927 177.946 -60.0179 35.0432 39.8786 -35.774Z" fill="#EFEFE3"/>
</svg>
<svg className="below-svg" width="264" height="337" viewBox="0 0 264 337" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.67783 167.129C135.913 93.7694 180.274 -69.875 239.869 34.2999C299.464 138.475 243.82 282.395 115.584 355.754C-12.6515 429.113 -53.6497 598.635 -116.607 488.583C-176.202 384.408 -120.558 240.488 7.67783 167.129Z" fill="#989A38" fill-opacity="0.12"/>
</svg>
<svg className="right-svg" width="269" height="262" viewBox="0 0 269 262" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M148.678 -95.8713C276.914 -169.231 321.274 -332.875 380.869 -228.7C440.464 -124.525 384.82 19.3946 256.584 92.7539C128.349 166.113 87.3503 335.635 24.393 225.583C-35.202 121.408 20.4423 -22.512 148.678 -95.8713Z" fill="#989A38" fill-opacity="0.12"/>
</svg>
<svg className="bottom-svg" width="353" height="287" viewBox="0 0 353 287" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M321.243 321.946C227.731 401.002 84.2661 385.06 0.805113 286.338C13.8998 206.813 145.623 303.88 239.135 224.824C332.647 145.767 264.449 5.21256 339.442 0.0493526C422.903 98.7714 414.755 242.889 321.243 321.946Z" fill="#EFEFE3"/>
</svg>
                    <div className="all">
                    

                    <div className="logo">
                        <span className="black">Fud</span>
                        <span className="olive">Cona</span>
                    </div>
                    <div className="input">
                        <div className="welcome">
                           <h2>Welcome back <br />
                            to FudCona</h2> 
                        </div>
                        <div className="inputs">
                        <div className="email-input">
                            <label htmlFor="Email">EMAIL</label>
                            <input type="email" name="login" placeholder = "Email" value={data.email} onChange={getData} required/>
                        </div>
                        <div className="pass-input">
                            <label htmlFor="Password">PASSWORD</label>
                            <input type="password" name="password" placeholder="Password" value={data.password} onChange={getData} required/>
                            <a href="#">Forgot password?</a>
                        </div>
                        </div>
                  
                        <div>
                            <button type="submit" className="sbmt-btn">Log In</button>
                        </div>
                        <div className="signup">
                            <p>Don't have an account?</p>
                           <Link to="/signup">
                            <a href="#">SIGN UP</a>
                           </Link>
                        </div>
                        <p className="text-blue-500">{response}</p>
                    </div>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;