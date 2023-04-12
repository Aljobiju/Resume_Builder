import React, { useState } from 'react';

function Education() {
  const [Edfields, setEdFields] = useState([]);

  const edhandleAddClick = () => {
    setEdFields([...Edfields, { field1: '', field2: '' }]);
  };

  const edhandleDeleteClick = (index) => {
    setEdFields(Edfields.filter((field, i) => i !== index));
  };

  const edhandleInputChange = (index, field, value) => {
    const newEdFields = [...Edfields];
    newEdFields[index][field] = value;
    setEdFields(newEdFields);
  };

  return (
    <div>
      <button onClick={edhandleAddClick}>Add EdFields</button>
      {Edfields.map((field, index) => (
        <div key={index}>
            <label for="name">College <span>*</span></label>
          <input
            type="text"
            value={field.field1}
            onChange={(e) => edhandleInputChange(index, 'field1', e.target.value)}
          />
          <label for="name">Course <span>*</span></label>
          <input
            type="text"
            value={field.field2}
            onChange={(e) => edhandleInputChange(index, 'field2', e.target.value)}
          />
          <button onClick={() => edhandleDeleteClick(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Education;
