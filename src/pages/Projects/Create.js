import React, { useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Breadcrumbs from "../../components/Common/Breadcrumb"

import http from '../../services/http-common'

const CreateProject = props => {
    //initial state
    const initialProjectState = {
        title: "",
        description: ""
    };
    const [project, setProject] = useState(initialProjectState);
    const [param, setParam] = useState(props.match.params.id);

    //retrieve data 
    useEffect(() => {
        if (param === '_add') {
            return null
        } else {
            retrieveProject();
        }
    }, []);

    //retrieve single project 
    const retrieveProject = () => {
        http.get("/projects/" + param)
            .then((response) => {
                console.log(response);
                setProject(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //handle Input change
    const handleInputChange = event => {
        const { name, value } = event.target;
        setProject({ ...project, [name]: value });
    };

    // handleValidSubmit
    const handleValidSubmit = e => {
        e.preventDefault();

        const isValid = true; //TODO: validation of fields

        if (isValid) {
            const payload = {
                title: project.title,
                description: project.description,
                created_by: 1
            }

            console.log(payload)

            //check for update or insert
            if (param === '_add') {
                //post data
                http.post("/projects/", payload)
                    .then((res) => {
                        console.log(res);
                        redirectLink();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                //post data
                http.put("/projects/" + param + "/", payload)
                    .then((res) => {
                        console.log(res);
                        redirectLink();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    }

    //redirect links
    const redirectLink = () => {
        return props.history.push("/projects/");
    };

    //title
    const getTitle = () => {
        if (param === '_add') {
            return "Create New";
        } else {
            return "Update Project";
        }
    }

    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> {getTitle()} | Afyadata</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Projects" breadcrumbItem={getTitle()} />

                    <Row>
                        <Col lg="12">
                            <Card className="pure-form">
                                <CardBody>
                                    <Row className="">
                                        <Col md={12}>
                                            <h6 className="text-uppercase font-weight-600">Project Information</h6>
                                        </Col>
                                    </Row>

                                    <form className="mb-3" name="formCreate" onSubmit={handleValidSubmit}>
                                        <Row>
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <label>Project Title <span className="red">*</span></label>
                                                    <input
                                                        name="title"
                                                        className="form-control"
                                                        onChange={handleInputChange}
                                                        value={project.title}
                                                        placeholder="Write project title ..."
                                                        required />
                                                    <span className="invalid-feedback">Project required</span>
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
                                                        onChange={handleInputChange}
                                                        value={project.description}
                                                        placeholder="Write description..."
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-4">
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <button className="btn btn-primary mr-2">{getTitle()}</button>
                                                    <a href="/projects" className="btn btn-danger">Cancel</a>
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

export default CreateProject