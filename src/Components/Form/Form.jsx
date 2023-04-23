import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ formData, setFormData }) {
  //Storing values

  const onChange = (value, key) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };
  const onEducationFieldChange = (value, key, id) => {
    setFormData((current) => ({
      ...current,
      educationDetails: current.educationDetails.map((details) => {
        if (details.id === id) {
          return {
            ...details,
            [key]: value,
          };
        }
        return details;
      }),
    }));
  };
  const onExperienceFieldChange = (value, key, id) => {
    setFormData((current) => ({
      ...current,
      experienceDetails: current.experienceDetails.map((details) => {
        if (details.id === id) {
          return {
            ...details,
            [key]: value,
          };
        }
        return details;
      }),
    }));
  };

  const saveForm = () => {};

  const addEducationField = (e) => {
    e.preventDefault();
    const newField = {
      id: crypto.randomUUID(),
      institution: "",
      course: "",
      year: "",
    };
    setFormData((current) => ({
      ...current,
      educationDetails: [...current.educationDetails, newField],
    }));
  };


  const addExperienceField = (e) => {
    e.preventDefault();
    const newField = {
      id: crypto.randomUUID(),
      company: "",
      designation: "",
      year: "",
    };
    setFormData((current) => ({
      ...current,
      experienceDetails: [...current.experienceDetails, newField],
    }));
  };

  return (
    <div>
      <form onSubmit={saveForm}>
        <h2>Personal Details</h2>
        <div className="form-group">
          <label for="name">
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange(e.target.value, "name")}
          />
        </div>

        <div className="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => onChange(e.target.value, "address")}
          />
        </div>

        <div className="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => onChange(e.target.value, "phone")}
          />
        </div>

        <div className="form-group">
          <label for="email">
            Email <span>*</span>
          </label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => onChange(e.target.value, "email")}
          />
        </div>

        <h2>Education Details</h2>

        {formData.educationDetails.map((detail) => {
          return (
            <section key={detail.id}>
              <div className="form-group">
                <label htmlFor="institution">
                  institution <span>*</span>
                </label>
                <input
                  type="text"
                  value={detail.institution}
                  onChange={(e) =>
                    onEducationFieldChange(
                      e.target.value,
                      "institution",
                      detail.id
                    )
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">
                  course <span>*</span>
                </label>
                <input
                  type="text"
                  value={detail.course}
                  onChange={(e) =>
                    onEducationFieldChange(e.target.value, "course", detail.id)
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">
                  year <span>*</span>
                </label>
                <input
                  type="text"
                  value={detail.year}
                  onChange={(e) =>
                    onEducationFieldChange(e.target.value, "year", detail.id)
                  }
                />
              </div>
            </section>
          );
        })}
        <button onClick={addEducationField}>Add Field</button>

         <h2>Experience Details</h2>

        {formData.experienceDetails.map((detail) => {
          return (
            <section key={detail.id}>
              <div className="form-group">
                <label htmlFor="company">
                  Company <span>*</span>
                </label>
                <input
                  type="text"
                  value={detail.company}
                  onChange={(e) =>
                    onExperienceFieldChange(
                      e.target.value,
                      "company",
                      detail.id
                    )
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">
                Designation <span>*</span>
                </label>
                <input
                  type="text"
                  value={detail.designation}
                  onChange={(e) =>
                    onExperienceFieldChange(e.target.value, "designation", detail.id)
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">
                  year <span>*</span>
                </label>
                <input
                  type="text"
                  value={detail.year}
                  onChange={(e) =>
                    onExperienceFieldChange(e.target.value, "year", detail.id)
                  }
                />
              </div>
            </section>
          );
        })}
        <button onClick={addExperienceField}>Add Field</button>
      </form>
    </div>
  );
}

export default Form;
