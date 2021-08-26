import React, { useEffect, useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import {
    Row, Col, Card, CardBody
} from "reactstrap"

import http from '../../services/http-common'

const SurveyLists = (props) => {
    const [surveys, setSurveys] = useState([]);
    const [projectId, setProjectId] = useState(props.projectId)

    //retrieve data 
    useEffect(() => {
        retrieveSurveys();
    }, []);

    //retrieve lists of surveys
    const retrieveSurveys = () => {
        http.get("/project/" + props.projectId + "/surveys")
            .then((response) => {
                console.log(response);
                setSurveys(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //view data
    const handleViewData = (projectId, surveyId) => {
        props.history.push(`/view-survey-data/${projectId}/${surveyId}`);
    }

    //edit survey
    const handleEditSurvey = (projectId, surveyId) => {
        props.history.push(`/edit-survey/${projectId}/${surveyId}`);
    }

    //delete survey
    const handleDeleteSurvey = survey => {
        http.delete('/surveys/' + survey.id)
            .then((response) => {
                console.log(response);
                setSurveys(surveys.filter(pr => pr.id !== survey.id))
            });

        console.log("Delete Survey");
    }

    //render view
    return (
        <Row className="mt-3">
            <Col md={12}>
                <Card className="pure-form">
                    <CardBody>
                        <Row>
                            <Col md={12}>
                                <Link to={'/create-survey/' + props.projectId} className="btn btn-outline-primary btn-xs">
                                    <i className="bx bx-plus"></i> Create New
                                </Link>
                            </Col>
                        </Row>

                        <table className="table table-striped table-bordered my-4 w-100">
                            <thead>
                                <tr>
                                    <th width="3%">#</th>
                                    <th width="18%">Title</th>
                                    <th width="40%">Description</th>
                                    <th width="10%">Created On</th>
                                    <th width="10%">Submitted</th>
                                    <th width="8%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {surveys.map((survey, index) => {
                                    return (
                                        <tr key={index} className="gradeX">
                                            <td>{index + 1}</td>
                                            <td>{survey.title}</td>
                                            <td>{survey.description}</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <a onClick={() => handleViewData(projectId, survey.id)} className="btn btn-outline-primary btn-xxs">
                                                    <i className="mdi mdi-eye"></i>
                                                </a>{" "}

                                                <a onClick={() => handleEditSurvey(projectId, survey.id)} className="btn btn-outline-secondary btn-xxs">
                                                    <i className="mdi mdi-pencil"></i>
                                                </a>{" "}

                                                <a onClick={() => handleDeleteSurvey(survey)} className="btn btn-outline-danger btn-xxs">
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
    );
}

export default SurveyLists;