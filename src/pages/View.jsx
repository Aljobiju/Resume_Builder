import React, { useEffect, useState } from "react";
import "../pages/View.css";
import { Link } from "react-router-dom";

function View({ formData }) {
  return (
    <div>
      {formData && (
        <div className="form-elements">
          <h2>Personal Details</h2>
          <div className="form-group">
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
            <p>Phone: {formData.phone}</p>
          </div>

          <h2>Education</h2>
          {formData.educationDetails &&
            formData.educationDetails.map((field, index) => (
              <div className="form-group" key={index}>
                <p>College: {field.institution}</p>
                <p>Course: {field.course}</p>
                <p>Year: {field.year}</p>
              </div>
            ))}

          <h2>Experience</h2>
          {formData.experienceDetails &&
            formData.experienceDetails.map((field, index) => (
              <div className="form-group" key={index}>
                <h4>Experience {index + 1}</h4>
                <p>Company: {field.company}</p>
                <p>Job: {field.designation}</p>
                <p>year: {field.year}</p>
              </div>
            ))}

          <h2>Skills</h2>
          <div className="form-group">
            {formData.skills &&
              formData.skills.map((skill) => (
                <p key={skill.value}>{skill.label}</p>
              ))}
          </div>

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
