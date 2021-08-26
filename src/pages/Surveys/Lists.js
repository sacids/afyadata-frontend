import React, { useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
  Row, Col, CardBody, Card, Alert, Container,
  Table,
  CardTitle,
  CardSubtitle
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormLists = props => {

  //return view
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Lists | Afyadata
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Home" breadcrumbItem="Forms" />

          <Row>
            <Col md={12}>
              <Link to="/xforms/create" className="btn btn-outline-primary btn-xs">
                <i className="bx bx-plus"></i> New Survey
              </Link>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div className="">
                <div className="table-responsive">
                  <Table className="project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Access</th>
                        <th scope="col">Submitted</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default FormLists