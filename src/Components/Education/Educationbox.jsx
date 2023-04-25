import React from "react";

function Educationbox(formData, setFormData) {
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

  const deleteEducationField = (id) => {
    setFormData((current) => ({
      ...current,
      educationDetails: current.educationDetails.filter(
        (detail) => detail.id !== id
      ),
    }));
  };
  return (
    <div>
      {formData.educationDetails.map((detail, index) => {
        const educationNumber = index + 1;
        return (
          <section className="exp_edu-details" key={detail.id}>
            <h4>Experience {educationNumber}</h4>
            <div className="form-group">
              <label htmlFor="institution">
                institution <span>*</span>
              </label>
              <input
                required
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
                required
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
                required
                type="number"
                value={detail.year}
                onChange={(e) =>
                  onEducationFieldChange(e.target.value, "year", detail.id)
                }
              />
            </div>
            <button
              onClick={() => deleteEducationField(detail.id)}
              color="danger"
            >
              Delete
            </button>
            <div className="section-separator"></div>
          </section>
        );
      })}
      <button onClick={addEducationField}>Add Field</button>
    </div>
  );
}

export default Educationbox;
