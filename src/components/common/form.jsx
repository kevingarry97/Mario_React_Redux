import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account, errors });
  };

  validateProperty = ({ id, value }) => {
    const property = { [id]: value };
    const schema = { [id]: this.schema[id] };
    const { error } = Joi.validate(property, schema);

    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderInput(id, htmlFor, label, type = "text") {
    const { errors } = this.state;
    return (
      <Input
        type={type}
        id={id}
        htmlFor={htmlFor}
        label={label}
        onChange={this.handleChange}
        error={errors[id]}
      />
    );
  }

  renderTextArea(id, label) {
    const { errors } = this.state;
    return (
      <div className="input-field">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          className="materialize-textarea"
          onChange={this.handleChange}
        ></textarea>
        {errors[id] && <div>{errors[id]}</div>}
      </div>
    );
  }

  renderButton(className, label) {
    return (
      <div className="input-filed">
        <button disabled={this.validate()} className={className}>
          {label}
        </button>
      </div>
    );
  }
}

export default Form;
