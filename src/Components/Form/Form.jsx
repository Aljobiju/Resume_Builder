import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { SKILLS } from "../constants";

function Form({ formData, setFormData }) {
  //Storing values
  const navigate = useNavigate();

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

  const saveForm = (e) => {
    e.preventDefault();
    navigate("/view");
  };

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

  const deleteEducationField = (id) => {
    setFormData((current) => ({
      ...current,
      educationDetails: current.educationDetails.filter(
        (detail) => detail.id !== id
      ),
    }));
  };
  const deleteExperienceField = (id) => {
    setFormData((current) => ({
      ...current,
      experienceDetails: current.experienceDetails.filter(
        (detail) => detail.id !== id
      ),
    }));
  };
  return (
    <div className="form-elements">
      <form onSubmit={saveForm}>
        <h2>Personal Details</h2>
        <div className="form-group">
          <label for="name">
            Full Name <span>*</span>
          </label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => onChange(e.target.value, "name")}
          />
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input
            required
            type="text"
            value={formData.address}
            onChange={(e) => onChange(e.target.value, "address")}
          />
        </div>
        <div className="form-group">
          <label for="phone">Phone</label>
          <input
            required
            type="number"
            value={formData.phone}
            onChange={(e) => onChange(e.target.value, "phone")}
          />
        </div>
        <div className="form-group">
          <label for="email">
            Email <span>*</span>
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => onChange(e.target.value, "email")}
          />
        </div>
        <h2>Education Details</h2>
        {formData.educationDetails.map((detail, index) => {
          const educationNumber = index + 1;
          return (
            <section className="exp_edu-details" key={detail.id}>
              <h4>Experience {educationNumber}</h4>
              <div className="form-group">
                <label htmlFor="institution">
                  Institution <span>*</span>
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
                  Course <span>*</span>
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
                  Year <span>*</span>
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
              <button onClick={() => deleteEducationField(detail.id)}>
                Delete
              </button>
              <div className="section-separator"></div>
            </section>
          );
        })}
        <button onClick={addEducationField}>Add Field</button>
        <h2>Experience Details</h2>

        {formData.experienceDetails.map((detail, index) => {
          const experienceNumber = index + 1;
          return (
            <section className="exp_edu-details" key={detail.id}>
              <h4>Experience {experienceNumber}</h4>
              <div className="form-group">
                <label htmlFor="company">
                  Company <span>*</span>
                </label>
                <input
                  required
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
                  required
                  type="text"
                  value={detail.designation}
                  onChange={(e) =>
                    onExperienceFieldChange(
                      e.target.value,
                      "designation",
                      detail.id
                    )
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">
                  Year <span>*</span>
                </label>
                <input
                  required
                  type="number"
                  value={detail.year}
                  onChange={(e) =>
                    onExperienceFieldChange(e.target.value, "year", detail.id)
                  }
                />
              </div>
              <button onClick={() => deleteExperienceField(detail.id)}>
                Delete
              </button>
              <div className="section-separator"></div>
            </section>
          );
        })}
        <button onClick={addExperienceField}>Add Field</button>
        <h2>Skills</h2>
        <Select
          isMulti
          options={SKILLS}
          value={formData.skills}
          onChange={(e) => {
            console.log(e);
            setFormData((current) => ({
              ...current,
              skills: e,
            }));
          }}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default Form;
