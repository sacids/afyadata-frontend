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

const RoleLists = props => {

    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>
                        Roles | Afyadata
                    </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Home" breadcrumbItem="Roles" />

                    <Row>
                        <Col md={12}>
                        <Link to="/roles/create" className="btn btn-outline-primary btn-xs">
                           <i className="bx bx-plus"></i> Create New
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <div className="">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered my-4 w-100">
                                        <thead>
                                            <tr>
                                                <th width="3%">#</th>
                                                <th width="16%">Role Name</th>
                                                <th width="40%">Description</th>
                                                <th width="20%">Perms</th>
                                                <th width="5%">Actions</th>
                                            </tr>
                                        </thead>

                                    </table>

                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default RoleLists