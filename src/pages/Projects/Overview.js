import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
    Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { format } from 'date-fns';

//import component
import SurveyLists from './SurveyLists';

//service
import http from '../../services/http-common'

const ProjectOverview = props => {
    //set state
    const [activeTab, setActiveTab] = useState("overview");
    const [project, setProject] = useState([]);
    const [projectGroups, setProjectGroups] = useState([]);
    const [projectMembers, setProjectMembers] = useState([]);
    const [param, setParam] = useState(props.match.params.id);

    //retrieve data 
    useEffect(() => {
        retrieveProject();
    }, []);

    //retrieve single project 
    const retrieveProject = () => {
        http.get("/projects/1")
            .then((response) => {
                console.log(response);
                setProject(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //retrieve project groups
    const retrieveProjectGroups = () => {
        http.get("/groups/")
            .then((response) => {
                console.log(response)
                setProjectGroups(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //retrieve project members
    const retrieveProjectMembers = () => {
        http.get("/projectMembers/")
            .then((response) => {
                console.log(response)
                setProjectMembers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //toggle tab
    const ToggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>
                        Projects Overview | Afyadata
                    </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Summary" breadcrumbItem="Project Overview" />

                    <Row>
                        <Col lg="12">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className={({ active: activeTab === 'overview' })}
                                        onClick={() => { ToggleTab('overview') }}>
                                        Overview
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className={({ active: activeTab === 'surveys' })}
                                        onClick={() => { ToggleTab('surveys') }}>
                                        Surveys
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className={({ active: activeTab === 'project-groups' })}
                                        onClick={() => { ToggleTab('project-groups') }}>
                                        Project Groups
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className={({ active: activeTab === 'project-members' })}
                                        onClick={() => { ToggleTab('project-members') }}>
                                        Project Members
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="overview">
                                    <Row className="mt-3">
                                        <Col md={12}>
                                            <Card className="pure-form">
                                                <CardBody>
                                                    <div className="row">
                                                        <label className="font-weight-600"> Project Title: </label>
                                                        <div> {project.title}</div>
                                                    </div>

                                                    <div className="row mt-2">
                                                        <label className="font-weight-600"> Project Description: </label>
                                                        <div> {project.description}</div>
                                                    </div>

                                                    <div className="row mt-2">
                                                        <label className="font-weight-600"> Created On: </label>
                                                        <div> {project.created_on} </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="surveys">
                                    <SurveyLists projectId={param} />
                                </TabPane>

                                <TabPane tabId="project-groups">
                                    <Row className="mt-3">
                                        <Col md={12}>
                                            <Card className="pure-form">
                                                <CardBody>
                                                    <table className="table table-striped table-bordered my-4 w-100">
                                                        <thead>
                                                            <tr>
                                                                <th width="3%">#</th>
                                                                <th width="85%">Title</th>
                                                                <th width="5%">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {projectGroups.map((pg, index) => {
                                                                return (
                                                                    <tr key={index} className="gradeX">
                                                                        <td>{index + 1}</td>
                                                                        <td>{pg.title}</td>
                                                                        <td>
                                                                            <a href="#" className="btn btn-outline-primary btn-xxs">
                                                                                <i className="mdi mdi-pencil"></i>
                                                                            </a>{" "}

                                                                            <a href="#" className="btn btn-outline-danger btn-xxs">
                                                                                <i className="mdi mdi-trash-can"></i>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="project-members">
                                    <Row className="mt-3">
                                        <Col md={12}>
                                            <Card className="pure-form">
                                                <CardBody>
                                                    <table className="table table-striped table-bordered my-4 w-100">
                                                        <thead>
                                                            <tr>
                                                                <th width="3%">#</th>
                                                                <th width="85%">Member Name</th>
                                                                <th width="5%">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {projectMembers.map((pm, index) => {
                                                                return (
                                                                    <tr key={index} className="gradeX">
                                                                        <td>{index + 1}</td>
                                                                        <td>name</td>

                                                                        <td>
                                                                            <a href="#" className="btn btn-outline-primary btn-xxs">
                                                                                <i className="mdi mdi-pencil"></i>
                                                                            </a>{" "}

                                                                            <a href="#" className="btn btn-outline-danger btn-xxs">
                                                                                <i className="mdi mdi-trash-can"></i>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ProjectOverview