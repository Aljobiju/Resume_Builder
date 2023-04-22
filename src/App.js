import './App.css';
import Form from './Components/Form/Form';
import Headerfile from './Components/Header/Headerfile';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import View from './pages/View';
import Home from './pages/Home';
import FormEdit from './pages/FormEdit';
import { useState } from 'react';


function App() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    educationDetails: [],
    experienceDetails: [],
    skills: []
  });

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<Home formData={formData} setFormData={setFormData} />} />
          {/* <Route path='/view' element={<View />} />
          <Route path='/hello' element={<FormEdit />} /> */}

        </Routes>


      </Router>
      
    </div>
  );
}

export default App;


