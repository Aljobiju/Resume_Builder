import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import View from './pages/View';
import Home from './pages/Home';
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
          <Route path='/view' element={<View formData={formData} />} />
          
       

        </Routes>


      </Router>
      
    </div>
  );
}

export default App;


