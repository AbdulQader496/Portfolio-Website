import {Routes, Route} from 'react-router-dom';
import Layout from './component/Layout/index'
// import Sidebar from './components/Sidebar';
import './App.scss';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route path="/" element={<Sidebar />}></Route> */}
      </Route> 
    </Routes>
    </>
  );
}

export default App;
