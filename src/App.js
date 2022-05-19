import './App.css';
import Profile from './components/restoProfile';
// import Profile2 from './components/restoProfile2';
// import SignupPage from './components/signupPage';
import Sidebar from './components/sidebar';
import Body from './components/body';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className='h-screen'>
      <Router>
        {/* <SignupPage/> */}
        <Body />
        <Sidebar />
        {/* <Profile /> */}
        {/* <Profile2 /> */}
      </Router>
    </div>
  );
}

export default App;
