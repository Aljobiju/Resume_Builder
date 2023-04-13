// import React from 'react'
// import { useEffect } from 'react'

// function View() {

//    useEffect(() =>{

//     const formData = JSON.parse(localStorage.getItem('formData'));
//     console.log(formData);

//    },[])

//   return (
//     <div>

//      <h1>Hello</h1>


//     </div>
//   )
// }

// export default View
import React, { useEffect, useState } from 'react';
import '../pages/View.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FormEdit() {
  

  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState([
    { college: '', course: '', year: '' },
    { college: '', course: '', year: '' }
  ]);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')));
//   const [experience, setEducation] = useState([
//     { college: '', course: '', year: '' },
//     { college: '', course: '', year: '' }
//   ]);
    const navigate=useNavigate();


    const edhandleInputChange = (index, field, value) => {
        const Education = [...education];
        Education[index][field] = value;
        setEducation(Education);
        setFormData((prevState) => ({
          ...prevState,
          Education,
        }));
      };
  

  useEffect(() => {
    const Data = localStorage.getItem('formData');
 
    if (Data) {
      setFormData(JSON.parse(Data));
    }
  }, []);

 
  const [Edfields, setEdFields] = useState([]);


  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    setIsEditing(false);
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  

 




  const onChange =(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))

  }
  const pageRoute =(e)=>{
    e.preventDefault()
    console.log(formData)
    localStorage.setItem('formData', JSON.stringify(formData));
     navigate('/view')
    
  }




  return (
    <div>
      {formData && (
        <form onSubmit={pageRoute}>
          <h2>Personal Details</h2>
          <input type='text' id='name' onChange={onChange} value={formData.name}/>
          <input type='text'id='email'onChange={onChange} value={formData.email}/>
          <input type='text'id='address' onChange={onChange}value={formData.address}/>
          <input type='text'id='phone'onChange={onChange} value={formData.phone}/>

          <h2>Education</h2>
          {formData.Education && formData.Education.map((field, index) => (
            <>
             
             <div key={index}>
              <label htmlFor={`college${index}`}>Institute:</label>
              <input
                type="text"
                id={`college${index}`}
                value={field.college}
                onChange={(e) => edhandleInputChange(index, 'college', e.target.value)}
                disabled={!isEditing}
              />
              {/* ... */}
            </div>
            </>
       
          ))}

          {/* <h2>Experience</h2>
          {formData.Experience && formData.Experience.map((field, index) => (
            <div key={index}>
              <input type='text' name={field} id='company' onChange={(e) => edhandleInputChange(index, 'company', e.target.value)}  value={field.company}/>
              <input type='text' name={field} id='job' onChange={(e) => edhandleInputChange(index, 'job', e.target.value) } value={field.job}/>
              <input type='text' name={field} id='year' onChange={(e) => edhandleInputChange(index, 'year', e.target.value)} value={field.year}/>
            </div>
          ))} */}

          <h2>Skills</h2>
          {/* {formData.Skills && formData.Skills.map((skill) => (
            
             <>
             
            <input onChange={onChange} value={skill.label}/>
             </>
          ))} */}
          <div onClick={onEdit}>Edit</div>
          <div onClick={onSave}>Save</div>
          {/* <button style={{marginRight: '10px'}}>Create New</button>
          <Link to="/view">View</Link> */}
          <button type="submit">Save Data</button>
        </form>
      )}
    </div>
  );
}

export default FormEdit