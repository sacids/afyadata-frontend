import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
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
  Badge
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { format } from 'date-fns';

import http from '../../services/http-common'

//import images
import pImage from "assets/images/download.png"

const ProjectLists = props => {
  //initial states
  const [projects, setProjects] = useState([]);

  //retrieve data 
  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    http.get("/projects/")
      .then((response) => {
        console.log(response);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //click project
  const handleEditProject = project => {
    props.history.push(`/create-project/${project.id}`);
  }

  //delete data
  const handleDeleteProject = project => {
    http.delete('/projects/' + project.id)
      .then((response) => {
        console.log(response);
        setProjects(projects.filter(pr => pr.id !== project.id))
      });

    console.log("Delete project");
  }

  //return view
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Projects Lists | Afyadata
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Summary" breadcrumbItem="Projects" />

          <Row>
            <Col md={12}>
              <Link to="/create-project/_add" className="btn btn-outline-primary btn-xs">
                <i className="bx bx-plus"></i> Create New
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
                        <th scope="col" style={{ width: "100px" }}>
                          #
                        </th>
                        <th scope="col">Projects</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((project, index) => {
                        return (
                          <tr key={index} className="gradeX">
                            <td>
                              <Link
                                to={`/project-overview/${project.id}`}>
                                <img src={pImage} alt="" className="img-fluid" />
                              </Link>
                            </td>
                            <td>
                              <h5 className="text-truncate font-size-14">
                                <Link
                                  to={`/project-overview/${project.id}`}
                                  className="text-dark">
                                  {project.title}
                                </Link>
                              </h5>
                              <p className="text-muted mb-0">
                                {project.description}
                              </p>
                            </td>

                            <td>{format(new Date(project.created_on), 'dd/MM/yyyy/ kk:mm')}</td>
                            <td>
                              <Badge className={"bg-success"}>
                                Active
                              </Badge>
                            </td>

                            <td>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  href="#"
                                  className="card-drop"
                                  tag="i"
                                >
                                  <i className="mdi mdi-dots-horizontal font-size-18" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={() => handleEditProject(project)}>
                                    <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={() => handleDeleteProject(project)}>
                                    <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default ProjectLists