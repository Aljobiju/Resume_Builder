import React from "react";
import Select from "react-select";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SKILLS } from "../constants";

function PersonalDetails(formData) {
  const onChange = (value, key) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  return (
    <div>
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
    </div>
  );
}

export default PersonalDetails;
