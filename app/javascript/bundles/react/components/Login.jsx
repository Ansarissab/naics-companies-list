import AuthenticationForApiService from "../services/AuthenticationForApiService.js";
import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import history from "../history.js";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value)
    } else if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const loginClicked = () => {
    AuthenticationForApiService.authenticate(
      email,
      password
    )
      .then((response) => {
        AuthenticationForApiService.registerSuccessfulLogin(
          email,
          response.headers["access-token"],
          response.headers["client"],
          response.headers["uid"]
        );

        props.setIsUserLoggedIn(true);
        history.push('/');
      })
      .catch((error) => {
        console.log(error.response)
      });
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={loginClicked}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
