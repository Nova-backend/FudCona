import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {VscAccount} from 'react-icons/vsc'
import {FiPhone} from 'react-icons/fi'
import {MdOutlineMail} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [response, setResponse] = useState("")

  const getData = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   const url = "http://196.223.240.154:8099/api/users/service-provider/user";
    //   axios.post(url, data,{headers:{'Content-Type':'application/json'}}).then((response)=>{
    //       console.log(response);
    //   })

    const api = await fetch(
      "https://196.223.240.154:8099/supapp/api/auth/client/signup",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then((response) => {
      return response.json();
    }).then((data)=>{
      setResponse(data.apierror.message)
      console.log(data.apierror.message)
    });

  };
  return (
    <div className="h-3/4 md:w-1/3 bg-white rounded-xl  drop-shadow absolute top-20 z-50 right-1/3 pl-12">
      <h6 className="text-2xl mt-2 text-yellow font-bold ml-12">SIGN UP</h6>
      <form className="" onSubmit={handleSubmit}>
        <input
          className="w-3/4 h-10 bg-gray pl-[30px] rounded-sm focus:outline-none mt-2 relative "
          placeholder="First Name"
          value={data.firstName}
          name="firstName"
          onChange={getData}
        ></input>
        <i className="absolute top-[10%] left-[10%]">
        <VscAccount/>
</i>
        <input
        
          className="w-3/4 h-10 bg-gray pl-[30px] rounded-sm focus:outline-none relative   "
          placeholder="Last Name"
          value={data.lastName}
          name="lastName"
          onChange={getData}
        ></input>
        <i className="absolute top-[20%] left-[10%]">
        <VscAccount/>
</i>
        <input
          className="w-3/4 h-10 bg-gray pl-[30px] rounded-sm focus:outline-none relative"
          placeholder="phone"
          value={data.mobile}
          name="mobile"
          onChange={getData}
        ></input>
        <i className="absolute top-[30%] left-[10%]"><FiPhone/></i>
        <input
          className="w-3/4 h-10 bg-gray pl-[30px] rounded-sm focus:outline-none relative"
          placeholder="User Name"
          value={data.user}
        ></input>
         <i className="absolute top-[40%] left-[10%]">
        <VscAccount/>
</i>
        <input
          className="w-3/4 h-10 bg-gray pl-[30px] rounded-sm focus:outline-none"
          placeholder="email"
          value={data.email}
          name="email"
          onChange={getData}
        ></input>
        <i className="absolute top-[50%]  left-[10%]">
          <MdOutlineMail/>
        </i>
        <input
          className="w-3/4 h-10 bg-gray pl-[30px] rounded-sm focus:outline-none relative"
          placeholder="password"
          value={data.password}
          name="password"
          type="password"
          onChange={getData}
        ></input>
        <i className="absolute top-[60%]  left-[10%]">
          <RiLockPasswordLine/>
        </i>

        <div>
          <p className="text-[12px]">Already have an account? <Link to="/signin" className="text-yellow">Sign In</Link></p>
          <input type="checkbox" className="w-4 h-2 "></input>
          <label className="text-[12px]">I aggree to the terms and conditions</label>
        </div>
        <button
          className="h-8 w-1/2 bg-yellow text-white rounded-sm ml-4 mt-2"
          type="submit"
        >
          Submit
        </button>

        <p className="text-red-300 ml-2 mt-2">{response}</p>
      </form>
    </div>
  );
}
export default Signup;
