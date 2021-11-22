import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../Constants";
import { Form, Button, Container } from "react-bootstrap";
import AuthenticationForApiService from "../services/AuthenticationForApiService.js";
import FormInput from './FormInput';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      hasFailed: false,
      showSuccessMessage: false,
      emailError: "",
    };
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  signUp = (e) => {
    const data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword,
    };

    axios
      .post(API_URL + "/auth", data)
      .then((response) => {
        AuthenticationForApiService.registerSuccessfulLogin(
          response.headers["uid"],
          response.headers["access-token"],
          response.headers["client"],
          response.headers["uid"]
        );
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({
          hasFailed: false,
          emailError: error.response.data.errors["email"],
          passwordError: error.response.data.errors["password"],
          confirmPasswordError:
            error.response.data.errors["password_confirmation"],
        });
      });
  };

  render() {
    const { name, email, emailError, password, passwordError, confirmPassword, confirmPasswordError } = this.state;

    return (
      <Container>
        <Form>
          { FormInput('email', 'Email address', 'Enter email', 'email', email, this.handleChange, emailError) }
          { FormInput('text', 'Name', 'Name', 'name', name, this.handleChange) }
          { FormInput('password', 'Password', 'Password', 'password', password, this.handleChange, passwordError) }
          { FormInput('password', 'Password', 'Password', 'confirmPassword', confirmPassword, this.handleChange, confirmPasswordError) }
          <Button variant="primary" type="button" onClick={this.signUp}>
            Signup
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
