
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Style/Formstyle.css'



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
  const [check, setCheck] = useState(false);


  const handleAddClick = (event) => {
    event.preventDefault();
    setFields([...fields, { company: '', job: '',year: ''}]);
  };

  
  const handleDeleteClick = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const Experience = [...fields];
    Experience[index][field] = value;
    setFields(Experience);
    setFormData((prevState)=>({
      ...prevState,
       Experience,
    }))
  };

  

     
      
      const [formFullData, setFormFullData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormFullData(JSON.parse(storedData));
      setFormFullData(storedData)
      console.log(storedData);
    }
  }, []);

   
     


  // Experience field ends

  //Storing values
  const [formData,setFormData] =useState({
  name:"",
  email:"",
  address:"",
  phone:"",
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

  const edhandleAddClick = (event) => {
    event.preventDefault();
    setEdFields([...Edfields, { college: '', course: '', year: '' }]);
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

  //Education field ends

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
   

  


 

  return (
    <div>
     <form onSubmit={pageRoute}>  
    <h2>Personal Details</h2>
  <div className="form-group">
    <label for="name">Full Name <span>*</span></label>
    <input type="text" name="name" id="name" onChange={onChange}></input>
    <div id="name__error" class="error"></div>
  </div>

  <div className="form-group">
    <label for="address">Address</label>
    <input type="text" name="address" id="address" onChange={onChange}></input>
  </div>

  <div className="form-group">
    <label for="phone">Phone</label>
    <input type="text" name="phone" id="phone" onChange={onChange}></input>
  </div>

  <div className="form-group">
    <label for="email">Email <span>*</span></label>
    <input type="text" name="email" id="email" onChange={onChange}></input>
    <div id="email__error" class="error"></div>
  </div>

  {/* Education field starts */}
  <h2>Education</h2>
  <div>
  <button onClick={edhandleAddClick}>Add Fields</button>
  {Edfields.map((field, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor="college" style={{ marginRight: '5px' }}>Institute <span>*</span></label>
      <input id="college" type="text" value={field.field1} onChange={(e) => edhandleInputChange(index, 'college', e.target.value)} style={{ marginRight: '15px' }} />
      <label htmlFor="course" style={{ marginRight: '5px' }}>Degree <span>*</span></label>
      <input id='course' type="text" value={field.field2} onChange={(e) => edhandleInputChange(index, 'course', e.target.value)} style={{ marginRight: '15px' }} />
      <label htmlFor="year" style={{ marginRight: '5px' }}>Year <span>*</span></label>
      <input id='year' type="text" value={field.field2} onChange={(e) => edhandleInputChange(index, 'year', e.target.value)} style={{ marginRight: '15px' }} />
      <div onClick={() => edhandleDeleteClick(index)}>Delete</div>
    </div>
  ))}
</div>

    {/* Education field ends */}
  
        {/* Experience field starts */}
        <h2>Experience</h2>
        <div>
          <button onClick={handleAddClick}>Add Fields</button>
          {fields.map((field, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="company" style={{ marginRight: '5px' }}>Company <span>*</span></label>
              <input
                id='company'
                type="text"
                value={field.field1}
                onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                style={{ marginRight: '15px' }} />
              <label htmlFor="job" style={{ marginRight: '5px' }}>Designation <span>*</span></label>
              <input
                id='job'
                type="text"
                value={field.field2}
                onChange={(e) => handleInputChange(index, 'job', e.target.value)}
                style={{ marginRight: '15px' }} />
                 <label htmlFor="job" style={{ marginRight: '5px' }}>Year <span>*</span></label>
              <input
                id='year'
                type="text"
                value={field.field3}
                onChange={(e) => handleInputChange(index, 'year', e.target.value)}
                style={{ marginRight: '15px' }} />
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </div>
          ))}
        </div>
    {/* experience field end */}
      
      <h2>Skills</h2>
      
          <div>
          <Select 
            onChange={handleChange}
          options={skills}
           isMulti />
          </div>
          <br/>

          <button style={{marginRight: '10px'}}>Create new</button>
          <button type="submit">Save</button>


      
      </form> 
   
    </div>
  )
}

export default Form