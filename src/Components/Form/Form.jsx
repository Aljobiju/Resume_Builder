import React, { useState } from 'react'
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

function Form() {
    

    


  return (
    <div>
        
    <h2>Personal Details</h2>
  <div className="form-group">
    <label for="name">Full Name <span>*</span></label>
    <input type="text" name="name" id="name" placeholder="Robert Norman Ross"></input>
    <div id="name__error" class="error"></div>
  </div>

  <div className="form-group">
    <label for="address">Address</label>
    <input type="text" name="address" id="address" placeholder="4059 Mt Lee Dr. Hollywood, CA 90068"></input>
  </div>

  <div className="form-group">
    <label for="phone">Phone</label>
    <input type="text" name="phone" id="phone" placeholder="+1  123 456 7890"></input>
  </div>

  <div className="form-group">
    <label for="email">Email <span>*</span></label>
    <input type="text" name="email" id="email" placeholder="example@mail.com"></input>
    <div id="email__error" class="error"></div>
  </div>

  <h2>Education</h2>
  <Education/>
      <h2>Experience</h2>
      <Experience/>
      <h2>Skills</h2>
      <Skills/>
      <button>Create new</button>
      <button>Save</button>
    </div>
  )
}

export default Form