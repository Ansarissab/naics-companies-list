import React from 'react';
import { Form } from "react-bootstrap";

const FormInput = (type, label, placeholder, name, value, onChange, error) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
    <p className="error">{error}</p>
  </Form.Group>
)

export default FormInput;
