import React, { useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import Breadcrumbs from "../../components/Common/Breadcrumb"

const CreateUser = props => {
    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Register New User | Afyadata</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Users" breadcrumbItem="Register New" />

                    <Row>
                        <Col lg="12">
                            <Card className="pure-form">
                                <CardBody>
                                    <Row className="">
                                        <Col md={12}>
                                            <h6 className="text-uppercase font-weight-600">user Information</h6>
                                        </Col>
                                    </Row>

                                    <form className="mb-3" name="formCreate" onSubmit=''>
                                        <Row>
                                            <Col md={4}>
                                                <div className="form-group">
                                                    <label>Full name <span className="red">*</span></label>
                                                    <input placeholder="Write full name ..."
                                                        name="fullName"
                                                        className="form-control"
                                                        onChange=''
                                                        data-validate='["required"]'
                                                        value='' />
                                                    <span className="invalid-feedback">Full name is required</span>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className="form-group">
                                                    <label>Email <span className="red">*</span> </label>
                                                    <input placeholder="Write email ..."
                                                        name="email"
                                                        className="form-control"
                                                        onChange=''
                                                        data-validate='["required"]'
                                                        value='' />
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className="form-group">
                                                    <label>Phone <span className="red">*</span> </label>
                                                    <input placeholder="Write phone ..."
                                                        name="phone"
                                                        className="form-control"
                                                        onChange=''
                                                        data-validate='["required"]'
                                                        value='' />
                                                </div>
                                            </Col>
                                        </Row>


                                        <Row className="mt-4">
                                            <Col md={12}>
                                                <h6 className="text-uppercase font-weight-600">Login Information</h6>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <label>Roles<span className="red">*</span> </label>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={4}>
                                                <div className="form-group">
                                                    <label>Username <span className="red">*</span> </label>
                                                    <input placeholder="Write username ..."
                                                        name="username"
                                                        className="form-control"
                                                        onChange=''
                                                        data-validate='["required"]'
                                                        value='' />
                                                    <span className="invalid-feedback"></span>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className="form-group">
                                                    <label>Password <span className="red">*</span> </label>
                                                    <input placeholder="Write password ..."
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        onChange=''
                                                        data-validate='["required"]'
                                                        value='' />
                                                    <span className="invalid-feedback"></span>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className="form-group">
                                                    <label>Confirm Password <span className="red">*</span> </label>
                                                    <input placeholder="Confirm password ..."
                                                        type="password"
                                                        name="passwordConfirm"
                                                        className="form-control"
                                                        onChange=''
                                                        data-validate='["required"]'
                                                        value='' />
                                                    <span className="invalid-feedback"></span>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <button className="btn btn-primary mr-2">Register User</button>
                                                    <a href="/users/lists" className="btn btn-danger">Cancel</a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default CreateUser