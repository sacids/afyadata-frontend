import React, { useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import Breadcrumbs from "../../components/Common/Breadcrumb"

const CreateRole = props => {
    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Create New Role | Afyadata</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Roles" breadcrumbItem="Create New" />

                    <Row>
                        <Col lg="12">
                            <Card className="pure-form">
                                <CardBody>
                                    <Row className="">
                                        <Col md={12}>
                                            <h6 className="text-uppercase font-weight-600">Role Information</h6>
                                        </Col>
                                    </Row>

                                    <form className="mb-3" name="formCreate" onSubmit=''>
                                        <Row>
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <label>Role name <span className="red">*</span></label>
                                                    <input placeholder="Write role name ..."
                                                        name="fullName"
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
                                                    <label>Description <span className="red">*</span></label>
                                                    <textarea
                                                    className="form-control"
                                                    id="description"
                                                    rows="3"
                                                    placeholder="Write description..."
                                                />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <button className="btn btn-primary mr-2">Create Role</button>
                                                    <a href="/roles/lists" className="btn btn-danger">Cancel</a>
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

export default CreateRole