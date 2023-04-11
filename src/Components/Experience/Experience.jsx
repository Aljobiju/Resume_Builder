import React, { useState } from 'react';

function Experience() {
  const [fields, setFields] = useState([]);

  const handleAddClick = () => {
    setFields([...fields, { field1: '', field2: '' }]);
  };

  const handleDeleteClick = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  return (
    <div>
      <button onClick={handleAddClick}>Add Fields</button>
      {fields.map((field, index) => (
        <div key={index}>
            <label for="name">Company <span>*</span></label>
          <input
            type="text"
            value={field.field1}
            onChange={(e) => handleInputChange(index, 'field1', e.target.value)}
          />
          <label for="name">Job Role <span>*</span></label>
          <input
            type="text"
            value={field.field2}
            onChange={(e) => handleInputChange(index, 'field2', e.target.value)}
          />
          <button onClick={() => handleDeleteClick(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Experience;

