import React, { useState } from 'react';

export default function StepCard({ question, fields, formData, handleChange, onNext, onPrev, isFirstStep, isLastStep }) {
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleMultiChange = (name, option) => {
    const currentValues = formData[name] || [];
    const updatedValues = currentValues.includes(option)
      ? currentValues.filter(val => val !== option)
      : [...currentValues, option];
    handleChange({ target: { name, value: updatedValues } });
  };

  const toggleDropdown = (name) => {
    setDropdownOpen(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="step-card">
      <h2>{question}</h2>

      {fields.map((fieldObj) => {
        const { name, type = "text", options = [] } = fieldObj;

        if (type === "select") {
          return (
            <select key={name} name={name} value={formData[name]} onChange={handleChange}>
              <option value="">{name}</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          );
        }

        if (type === "multiselect") {
          return (
            <div key={name} style={{ marginBottom: '20px', width: '100%' }}>
              <div 
                className="multiselect-box"
                onClick={() => toggleDropdown(name)}
              >
                {formData[name]?.length > 0 ? `${formData[name].length} selected` : ` ${name}`}
                <span className="dropdown-icon">{dropdownOpen[name] ? '⌃' : '⌄'}</span>
              </div>

              {dropdownOpen[name] && (
                <div className="dropdown-options">
                  {options.map((opt) => (
                    <label key={opt} style={{ display: 'block' }}>
                      <input
                        type="checkbox"
                        checked={formData[name]?.includes(opt)}
                        onChange={() => handleMultiChange(name, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}

              {/* Display selected tags */}
              <div className="selected-tags">
                {formData[name]?.map((selected) => (
                  <span key={selected} className="tag">{selected}</span>
                ))}
              </div>
            </div>
          );
        }

        if (type === "date") {
          return (
            <input
              key={name}
              type="date"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              style={{ marginBottom: '12px', display: 'block' }}
            />
          );
        }

        return (
          <input
            key={name}
            type="text"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={name.replace(/([A-Z])/g, ' $1')}
            style={{ marginBottom: '12px', display: 'block' }}
          />
        );
      })}

      <div className="step-controls">
        {!isFirstStep && <button onClick={onPrev}>Previous</button>}
        <button onClick={onNext}>{isLastStep ? 'Submit' : 'Next'}</button>
      </div>
    </div>
  );
}