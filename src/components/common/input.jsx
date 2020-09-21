import React from "react";

const Input = ({ type, id, htmlFor, label, error, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} onChange={onChange} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
