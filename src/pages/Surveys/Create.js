import React, { useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

import http from '../../services/http-common'

const CreateSurvey = (props) => {
    //initial state
    const initialSurvey = {
        title: "",
        description: "",
        XMLFile: undefined
    };
    const [survey, setSurvey] = useState(initialSurvey);
    const [param, setParam] = useState(props.projectId);

    console.log("ProjectId => " + props.projectId)

    //handle Input change
    const handleInputChange = e => {
        const input = e.target;
        const name = input.name
        const value = input.type === 'file' ? e.target.files[0] : input.value;

        console.log(value);
        //set survey
        setSurvey({ ...survey, [name]: value });
    };

    // handleValidSubmit
    const handleValidSubmit = e => {
        e.preventDefault();

        const isValid = true; //TODO: validation of fields

        if (isValid) {
            //payload
            const payload = new FormData();
            payload.append("title", survey.title)
            payload.append("description", survey.description)
            payload.append("xform", survey.XMLFile)
            payload.append("project_id", props.projectId)
            payload.append("created_by", 1)

            console.log(...payload)

            //post data
            http.post("/surveys/", payload)
                .then((res) => {
                    console.log(res);
                    redirectLink();
                })
                .catch((err) => {
                    console.log(err.request);
                });
        }
    }

    //redirect links
    const redirectLink = () => {
        return props.history.push(`/project-overview/${props.projectId}`);
    };

    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> New Survey| Afyadata</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Surveys" breadcrumbItem="New Survey" />

                    <Row>
                        <Col lg="12">
                            <Card className="pure-form">
                                <CardBody>
                                    <Row className="">
                                        <Col md={12}>
                                            <h6 className="text-uppercase font-weight-600">Survey Information</h6>
                                        </Col>
                                    </Row>

                                    <form className="mb-3" onSubmit={handleValidSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <label>Title <span className="red">*</span></label>
                                                    <input placeholder="Write form title ..."
                                                        name="title"
                                                        className="form-control"
                                                        onChange={handleInputChange}
                                                        value={survey.title}
                                                        required />
                                                    <span className="invalid-feedback"></span>
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="form-group">
                                                    <label>XML File <span className="red">*</span></label>
                                                    <input
                                                        type="file"
                                                        name="XMLFile"
                                                        className="form-control"
                                                        onChange={handleInputChange}
                                                        required />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <label>Description <span className="red">*</span></label>
                                                    <textarea
                                                        className="form-control"
                                                        name="description"
                                                        rows="3"
                                                        placeholder="Write description..."
                                                        onChange={handleInputChange}
                                                        value={survey.description}
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <button className="btn btn-primary mr-2">Save</button>
                                                    <a href={'/project-overview/' + props.projectId} className="btn btn-danger">Cancel</a>
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

export default CreateSurvey;