import React, { useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ProjectSummary = props => {

    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Afyadata - Project Summary</title>
                </MetaTags>
                <Container fluid>
                <Breadcrumbs title="Home" breadcrumbItem="Projects Summary" />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ProjectSummary