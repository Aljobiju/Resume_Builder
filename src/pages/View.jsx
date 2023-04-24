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
import React, { useEffect, useState } from "react";
import "../pages/View.css";
import { Link } from "react-router-dom";

function View({ formData }) {
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
          {formData.educationDetails &&
            formData.educationDetails.map((field, index) => (
              <div key={index}>
                <p>College: {field.institution}</p>
                <p>Course: {field.course}</p>
                <p>Year: {field.year}</p>
              </div>
            ))}

          <h2>Experience</h2>
          {formData.experienceDetails &&
            formData.experienceDetails.map((field, index) => (
              <div key={index}>
                <p>Company: {field.company}</p>
                <p>Job: {field.designation}</p>
                <p>year: {field.year}</p>
              </div>
            ))}

          <h2>Skills</h2>
          {formData.skills &&
            formData.skills.map((skill) => (
              <p key={skill.value}>{skill.label}</p>
            ))}
          <button>Create New</button>
          <Link to="/" className="button">
            Edit
          </Link>
        </div>
      )}
    </div>
  );
}

export default View;
