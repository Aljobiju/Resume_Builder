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

function View() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      {formData && (
        <div>
          <h2>Personal Details</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Address: {formData.address}</p>
          <p>Phone: {formData.phone}</p>

          <h2>Education</h2>
          {formData.Education && formData.Education.map((field, index) => (
            <div key={index}>
              <p>College: {field.college}</p>
              <p>Course: {field.course}</p>
              <p>Year: {field.year}</p>
            </div>
          ))}

          <h2>Experience</h2>
          {formData.Experience && formData.Experience.map((field, index) => (
            <div key={index}>
              <p>Company: {field.company}</p>
              <p>Job: {field.job}</p>
              <p>year: {field.year}</p>
            </div>
          ))}

          <h2>Skills</h2>
          {formData.Skills && formData.Skills.map((skill) => (
            <p key={skill.value}>{skill.label}</p>
          ))}
          <button style={{marginRight: '10px'}}>Create New</button>
          <Link to="/hello" className="button">Edit</Link>

        </div>
      )}
    </div>
  );
}

export default View;
