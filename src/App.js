import './App.css';
import Form from './Components/Form/Form';
import Headerfile from './Components/Header/Headerfile';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import View from './pages/View';
import Home from './pages/Home';
import FormEdit from './pages/FormEdit';


function App() {
  return (
    <div className="App">
      {/* <Headerfile/>
      <Form/> */}
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/view' element={<View />} />
          <Route path='/hello' element={<FormEdit />} />

        </Routes>


      </Router>
      
    </div>
  );
}

export default App;


