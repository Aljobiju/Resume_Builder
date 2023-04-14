// export default View
import React, { useEffect, useState } from 'react';
// import '../pages/View.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../pages/Formedit.css'

function FormEdit() {
  

  // const [isEditing, setIsEditing] = useState(false);

  const [education, setEducation] = useState([
    { college: '', course: '', year: '' },
  ]);
  const [experience, setExperience] = useState([
    { company: '', job: '', year: '' },

  ]);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')));
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
      const handleInputChange = (index, field, value) => {
        const Experience = [...experience];
        Experience[index][field] = value;
        setExperience(Experience);
        setFormData((prevState) => ({
          ...prevState,
          Experience,
        }));
      };
  

  useEffect(() => {
    const Data = localStorage.getItem('formData');
 
    if (Data) {
      setFormData(JSON.parse(Data));
    }
  }, []);

 
  const [Edfields, setEdFields] = useState([]);


  // const onEdit = () => {
  //   setIsEditing(true);
  // };

  const onSave = () => {
    // setIsEditing(false);
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
          <label for="name">Full Name <span>*</span></label>
          <input type='text' id='name' onChange={onChange} value={formData.name} /><br/>
          <label for="email">Email <span>*</span></label>
          <input type='text'id='email'onChange={onChange} value={formData.email}/><br/>
          <label for="address">Address <span>*</span></label>
          <input type='text'id='address' onChange={onChange}value={formData.address}/><br/>
          <label for="phone">Phone <span>*</span></label>
          <input type='text'id='phone'onChange={onChange} value={formData.phone}/>

          <h2>Education</h2>
          {/* <h6 style={{marginBottom: '0'}}>Click on 'Edit' to edit education field</h6>
          <div id='btn' onClick={onEdit} style={{display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', cursor: 'pointer'}}>Edit</div> */}


          {formData.Education && formData.Education.map((field, index) => (
            <>
             
             <div key={index}>
              <label htmlFor={`college${index}`}>College:</label>
              <input
                type="text"
                id={`college${index}`}
                value={field.college}
                onChange={(e) => edhandleInputChange(index, 'college', e.target.value)}
                // disabled={!isEditing}
              />
               <label htmlFor={`course${index}`}>Course:</label>
               <input
                type="text"
                id={`course${index}`}
                value={field.course}
                onChange={(e) => edhandleInputChange(index, 'course', e.target.value)}
                // disabled={!isEditing}
              />
              <label htmlFor={`year${index}`}>Year:</label>
              <input
                type="text"
                id={`year${index}`}
                value={field.year}
                onChange={(e) => edhandleInputChange(index, 'year', e.target.value)}
                // disabled={!isEditing}
              />
              {/* ... */}
            </div>
            </>
       
          ))}

        <h2>Experience</h2>
          {/* <h6 style={{marginBottom: '0'}}>Click on 'Edit' to edit Expereince field</h6>
          <div id='btn' onClick={onEdit} style={{display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', cursor: 'pointer'}}>Edit</div> */}

        
          {formData.Experience && formData.Experience.map((field, index) => (
            <>
             
             <div key={index}>
              <label htmlFor={`company${index}`}>Company:</label>
              <input
                type="text"
                id={`company${index}`}
                value={field.company}
                onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                // disabled={!isEditing}
              />
               <label htmlFor={`job${index}`}>Designation:</label>
               <input
                type="text"
                id={`job${index}`}
                value={field.job}
                onChange={(e) => handleInputChange(index, 'job', e.target.value)}
                // disabled={!isEditing}
              />
              <label htmlFor={`year${index}`}>Year:</label>
              <input
                type="text"
                id={`year${index}`}
                value={field.year}
                onChange={(e) => handleInputChange(index, 'year', e.target.value)}
                // disabled={!isEditing}
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
          {formData.Skills && formData.Skills.map((skill) => (
             <input type='text' id='name' onChange={onChange} value={skill.label} />
             
          ))}
          <h6 style={{marginBottom: '0'}}>Click 'Save' before submitting the fields</h6>
          <div onClick={onSave} style={{display: 'inline-block', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', borderRadius: '4px', cursor: 'pointer'}}>Save</div>
<button type="submit" style={{marginLeft: '10px'}}>Submit</button>

        </form>
      )}
    </div>
  );
}

export default FormEdit
