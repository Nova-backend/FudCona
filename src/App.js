import React from 'react';
import './App.css';
import Form from "./components/Form";
import Welcome from "./components/Welcome"
import Profile from './components/restoProfile';
import Profile2 from './components/restoProfile2';
import SignupPage from './components/signupPage';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <Welcome /> */}

{/* <SignupPage/> */}
<Profile />
{/* <Profile2 /> */}

    </div>
  );
}

export default App;
