import './App.css';

//Modules
import Home from './Modules/Home'
import About from './Modules/About'
import Work from './Modules/Work'
import Skill from './Modules/Skill'


function App() {
  return (
    <>
    <div className='page1'>
      <div id="Home"> <Home/></div>
      <div id="About"> <About/></div>
    </div>
       <div id="Work"> <Work/></div>
       <div id="Skill"> <Skill/></div>

    </>
  );
}

export default App;
