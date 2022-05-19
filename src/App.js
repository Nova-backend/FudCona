// <<<<<<< HEAD
// import './App.css';
// import Profile from './components/restoProfile';
// // import Profile2 from './components/restoProfile2';
// // import SignupPage from './components/signupPage';
// import Sidebar from './components/sidebar';
// import Body from './components/body';
// import { BrowserRouter as Router } from 'react-router-dom'
// function App() {
//   return (
//     <div className='h-screen'>
//       <Router>
//         {/* <SignupPage/> */}
//         <Body />
//         <Sidebar />
//         {/* <Profile /> */}
//         {/* <Profile2 /> */}
//       </Router>
// =======
import logo from './logo.svg';
import Left from './components/left'
import Feed from './components/feed'


function App() {
  return (
    <div className="App  h-[100vh] w-[100%] bg-[#E5E5E5] flex ">
      <Left/>
      <Feed/>
{/* >>>>>>> origin/gilbert */}
    </div>
  );
}

export default App;
