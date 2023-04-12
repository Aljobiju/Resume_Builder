import React from 'react'
import { useEffect } from 'react'

function View() {

   useEffect(() =>{

    const formData = JSON.parse(localStorage.getItem('formData'));
    console.log(formData);

   },[])

  return (
    <div>

     <h1>Hello</h1>


    </div>
  )
}

export default View