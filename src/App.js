
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Layout from './layout';






function App() {
  return (
    
        
    <div className="App">
    <header>
    <header className='App-header'>
            <NavBar></NavBar>

             <BrowserRouter>
          <Routes>
         <Route path="/" element={<Layout />}>
             <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About/>} />
             </Route>
           </Routes>
        </BrowserRouter>

            </header>
    </header>
   
   
      
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;



