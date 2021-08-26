import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
  Row, Col, CardBody, Card, Alert, Container,
  Table,
  CardTitle,
  CardSubtitle
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

import http from '../../services/http-common'

const ViewDataLists = props => {
  const [projectId, setProjectId] = useState(props.match.params.projectId)
  const [surveyId, setSurveyId] = useState(props.match.params.surveyId)
  const [config, setConfig] = useState([]);
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    retrieveConfig();
    retrieveData();
  }, []);

  //retrieve config
  const retrieveConfig = () => {
    http.get("/survey/" + surveyId + "/config")
      .then((response) => {
        console.log(response);
        setConfig(response.data);
      })
      .catch((err) => {
        console.log(err.request);
      });
  }

  //retrive  survey data
  const retrieveData = () => {
    http.get("/survey/" + surveyId + "/data")
      .then((response) => {
        console.log(response);
        setSurveyData(response.data);
      })
      .catch((err) => {
        console.log(err.request);
      });
  }

  //return view
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Data | Afyadata
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Home" breadcrumbItem="Form Data" />

          <Row>
            <Col lg="12">

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default ViewDataLists;