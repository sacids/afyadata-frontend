import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { withRouter, Link, Redirect } from "react-router-dom"
import { Row, Col, CardBody, Card, Alert, Container, Form, FormGroup, Label, Input } from "reactstrap"

import AuthService from 'services/auth-service'
import http from 'services/http-common'

// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.svg"

const Login = props => {
  //set initial state
  const initialCredentials = {
    username: "",
    password: ""
  }
  const [credential, setCredetial] = useState(initialCredentials);
  const [msg, setMsg] = useState("");
  const [redirect, setRedirect] = useState(false);

  //handle Input change
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCredetial({ ...credential, [name]: value });
  };

  // handleValidSubmit
  const handleValidSubmit = e => {
    e.preventDefault();

    const isValid = true; //TODO: validation of fields

    if (isValid) {
      AuthService.Login(credential.username, credential.password).then(() => {
        //pull users
        retrieveUser();

        //set state
        setMsg("Login successfully");
        setRedirect(true);
      },
        (error) => {
          //set state
          setMsg("Invalid username or email");
          setRedirect(false);
          console.log(error);
        }
      );
    }
  }

  //retrieve user
  const retrieveUser = () => {
    http.get("/current_user/")
      .then((response) => {
        console.log(response);
        localStorage.setItem("authUser", JSON.stringify(response.data.user));
      })
      .catch((err) => {
        console.log(err.request);
      });
  };

  //check for redirect
  console.log("redirect => " + redirect);
  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  //check if user login
  //const login = localStorage.getItem("isLoggedIn");
  // if (login) {
  //   return <Redirect to="/dashboard" />;
  // }

  //return view
  return (
    <React.Fragment>
      <MetaTags>
        <title>Afyadata | Login</title>
      </MetaTags>

      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-softbg-soft-primary">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h3 className="text-white text-uppercase">Welcome Back !</h3>
                        <p className="text-white">Sign in to continue to Afyadata.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pure-form pt-0">
                  <div>
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="p-2">
                    <Form className="form-horizontal" onSubmit={handleValidSubmit}>

                      {msg ? <Alert color="danger">{msg}</Alert> : null}

                      <div className="mb-3">
                        <FormGroup>
                          <Label>Username <span className="text-danger">*</span></Label>
                          <Input type="text"
                            name="username"
                            className="form-control"
                            placeholder="Write username ..."
                            value={credential.username}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </div>

                      <div className="mb-3">
                        <FormGroup>
                          <Label>Password <span className="text-danger">*</span></Label>
                          <Input type="password"
                            name="password"
                            className="form-control"
                            placeholder="Write password ..."
                            value={credential.password}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline" />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline">
                          Remember me
                        </label>
                      </div>

                      <button className="btn btn-block btn-primary mt-3" type="submit">
                        Login
                      </button>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-2 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Afyadata. All right reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>)
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
