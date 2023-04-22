import React from "react";
import Headerfile from "../Components/Header/Headerfile";
import Form from "../Components/Form/Form";

function Home({ formData, setFormData }) {
  return (
    <>
      <Headerfile />
      <Form formData={formData} setFormData={setFormData} />
    </>
  );
}

export default Home;
