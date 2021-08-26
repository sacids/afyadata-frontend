import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { 
  Row,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Alert,
  Container,
  Table,
  UncontrolledDropdown,
  Badge } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import http from '../../services/http-common'

const Dashboard = props => {
  //retrieve data 
  // useEffect(() => {
  //   retrieveUser();
  // }, []);

  //return view
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Dashboard | Afyadata
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Dashboard" breadcrumbItem="Summary" />


        </Container>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
