import {Routes, Route} from 'react-router-dom';
import Layout from './component/Layout/index.js'
import Home from './component/Home/index.js';
import './App.scss';
import About from './component/About/index.js';
import Contact from './component/Contact/index.js';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact />}/>
      </Route> 
    </Routes>
    </>
  );
}

export default App;
