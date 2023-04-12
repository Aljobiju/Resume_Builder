import React, { useState } from 'react'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';



const skills = [
  { label: "php", value: 355 },
  { label: "C++", value: 54 },
  { label: "c#", value: 43 },
  { label: "html", value: 61 },
  { label: "java", value: 965 },
];

function Form() {

  
  // Experience field starts
  const [fields, setFields] = useState([]);
  const [fullData, setFullData] = useState([]);

  const handleAddClick = () => {
    setFields([...fields, { field1: '', field2: '' }]);
  };

  const handleDeleteClick = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  // Experience field ends

  
  const [formData,setFormData] =useState({
  name:"",
  email:"",
  address:"",
  phone:"",
  expereince:[]
  }
  );
  const onChange =(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  }

   const navigate=useNavigate();

  const pageRoute =(e)=>{
    e.preventDefault()
    console.log(formData)
    localStorage.setItem('formData', JSON.stringify(formData));
     navigate('/view')
    
  }

  const [selectedOption, setSelectedOption] = useState([]);
  
  // education field
  const [Edfields, setEdFields] = useState([]);

  const edhandleAddClick = () => {
    setEdFields([...Edfields, { college: '', course: '' }]);
  };

  const edhandleDeleteClick = (index) => {
    setEdFields(Edfields.filter((field, i) => i !== index));
  };

  const edhandleInputChange = (index, field, value) => {
    const Education = [...Edfields];
    Education[index][field] = value;
    setEdFields(Education);
    setFormData((prevState)=>({
      ...prevState,
       Education,
    }))
    
  };



    var handleChange = (selectedOption) => {

      const Skills = [...selectedOption];
    
    setSelectedOption(Skills);
    setFormData((prevState)=>({
      ...prevState,
       Skills,
    }))
      // console.log(selectedOption);
      // setSelectedOption(selectedOption.value);
      // setFormData((prevState)=>({
      //   ...prevState,
      //   selectedOption,
      // }))
    };
   

  


  // Education field ends

  return (
    <div>
     <form onSubmit={pageRoute}>  
    <h2>Personal Details</h2>
  <div className="form-group">
    <label for="name">Full Name <span>*</span></label>
    <input type="text" name="name" id="name" placeholder="Robert Norman Ross" onChange={onChange}></input>
    <div id="name__error" class="error"></div>
  </div>

  <div className="form-group">
    <label for="address">Address</label>
    <input type="text" name="address" id="address" placeholder="4059 Mt Lee Dr. Hollywood, CA 90068" onChange={onChange}></input>
  </div>

  <div className="form-group">
    <label for="phone">Phone</label>
    <input type="text" name="phone" id="phone" placeholder="+1  123 456 7890" onChange={onChange}></input>
  </div>

  <div className="form-group">
    <label for="email">Email <span>*</span></label>
    <input type="text" name="email" id="email" placeholder="example@mail.com" onChange={onChange}></input>
    <div id="email__error" class="error"></div>
  </div>

  {/* Education field starts */}
  <h2>Education</h2>
  <div>
      <button onClick={edhandleAddClick}>Add EdFields</button>
      {Edfields.map((field, index) => (
        <div key={index}>
            <label for="name">College <span>*</span></label>
          <input
            id="college"
            type="text"
            value={field.field1}
            onChange={(e) => edhandleInputChange(index, 'college', e.target.value)}
          />
          <label for="name">Course <span>*</span></label>
          <input
            id='course'
            type="text"
            value={field.field2}
            onChange={(e) => edhandleInputChange(index, 'course', e.target.value)}
          />
          <button onClick={() => edhandleDeleteClick(index)}>Delete</button>
        </div>
      ))}
    </div>
    {/* Education field ends */}
  
        {/* Experience field starts */}
      <h2>Experience</h2>
      <div>
      <button onClick={handleAddClick}>Add Fields</button>
      {fields.map((field, index) => (
        <div key={index}>
            <label for="name">Company <span>*</span></label>
          <input
            id='company'
            type="text"
            value={field.field1}
            onChange={(e) => handleInputChange(index, 'field1', e.target.value)}
          />
          <label for="name">Job Role <span>*</span></label>
          <input
            id='job'
            type="text"
            value={field.field2}
            onChange={(e) => handleInputChange(index, 'field2', e.target.value)}
          />
          <button onClick={() => handleDeleteClick(index)}>Delete</button>
        </div>
      ))}
    </div>
    {/* experience field end */}
      
      <h2>Skills</h2>
      {/* skillset */}
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <Select 
            onChange={handleChange}
          options={skills}
           isMulti />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      {/* skillset end */}

      <button>Create new</button>
      <button type='submit'>Save</button>
      
      </form> 
   
    </div>
  )
}

export default Form