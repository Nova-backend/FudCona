// import axios from "axios";
import { useState } from "react";
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
      "http://196.223.240.154:8099/supapp/api/auth/client/signup",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then((response) => {
      return response.json();
    }).then((data)=>{
      setResponse(data.apierror.message)
        //working
      // console.log(response.json());
      console.log(data.apierror.message)
    });
    // const response = await api.json();
    // console.log(response);
  };
  return (
    <div className="h-3/4 md:w-1/3 bg-white rounded-xl  drop-shadow absolute top-20 z-50 right-1/3 ">
      <h6 className="text-2xl ml-44 mt-8">SIGN UP</h6>
      <form className="ml-16" onSubmit={handleSubmit}>
        <input
          className="w-3/4 h-12 bg-gray pl-6 rounded-sm focus:outline-none mt-2"
          placeholder="First Name"
          value={data.firstName}
          name="firstName"
          onChange={getData}
        ></input>
        <input
          className="w-3/4 h-12 bg-gray pl-6 rounded-sm focus:outline-none mt-2"
          placeholder="Last Name"
          value={data.lastName}
          name="lastName"
          onChange={getData}
        ></input>
        <input
          className="w-3/4 h-12 bg-gray pl-6 rounded-sm focus:outline-none mt-2"
          placeholder="phone"
          value={data.mobile}
          name="mobile"
          onChange={getData}
        ></input>
        <input
          className="w-3/4 h-12 bg-gray pl-6 rounded-sm focus:outline-none mt-2"
          placeholder="User Name"
          value={data.user}
        ></input>
        <input
          className="w-3/4 h-12 bg-gray pl-6 rounded-sm focus:outline-none mt-2"
          placeholder="email"
          value={data.email}
          name="email"
          onChange={getData}
        ></input>
        <input
          className="w-3/4 h-12 bg-gray pl-6 rounded-sm focus:outline-none mt-2"
          placeholder="password"
          value={data.password}
          name="password"
          type="password"
          onChange={getData}
        ></input>

        <div>
          <input type="checkbox" className="mx-4 mt-8"></input>
          <label>I aggree to the terms and conditions</label>
        </div>
        <button
          className="h-8 w-1/2 bg-yellow text-white rounded-sm ml-12 mt-4"
          type="submit"
        >
          Submit
        </button>
        <p className="text-red-300 ml-24">{response}</p>
      </form>
    </div>
  );
}
export default Signup;
