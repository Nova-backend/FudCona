import logo from './logo.svg';
import Left from './components/left'
import Feed from './components/feed'


function App() {
  return (
    <div className="App  h-[100vh] w-[100%] bg-[#E5E5E5] flex ">
      <Left/>
      <Feed/>
    </div>
  );
}

export default App;
