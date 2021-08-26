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

const UserLists = props => {

    //return view
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>
                        Users | Afyadata
                    </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Home" breadcrumbItem="Users" />

                    <Row>
                        <Col md={12}>
                        <Link to="/users/register" className="btn btn-outline-primary btn-xs">
                           <i className="bx bx-user-plus"></i> Register New
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
                                                <th width="16%">Full Name</th>
                                                <th width="12%">Username</th>
                                                <th width="8%">Phone</th>
                                                <th width="14%">Email</th>
                                                <th width="8%">Status</th>
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

export default UserLists