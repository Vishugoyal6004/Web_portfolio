import './App.css';

//Modules
import Home from './Modules/Home'
import About from './Modules/About'
import Work from './Modules/Work'

function App() {
  return (
    <>
    <div className='page1'>
    <Home/>
    <About/>
    </div>
    <Work/>
    </>
  );
}

export default App;
