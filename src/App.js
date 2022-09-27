
import './App.css';
import NavBar from './components/NavBar';
import Video from './components/Video';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar></NavBar>
      </header>
      <body>
        <Video></Video>
      </body>
    </div>
  );
}

export default App;
