import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Projects
import Dashboard from "../pages/Dashboard/index"
import ProjectSummary from "../pages/Projects/Summary"
import ProjectLists from "pages/Projects/Lists"
import CreateProject from "pages/Projects/Create"
import ProjectOverview from "pages/Projects/Overview"

//survey 
import CreateSurvey from "pages/Surveys/Create"
// import EditSurvey from "pages/Surveys/Edit"
// import ViewSurveyData from "pages/Surveys/ViewData"

import UserLists from "pages/Users/Lists"
import CreateUser from "pages/Users/Create"

import RoleLists from "pages/Roles/Lists"
import CreateRole from "pages/Roles/Create"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/project-summary", component: ProjectSummary },
  { path: "/projects", component: ProjectLists},
  { path: "/create-project/:id", component: CreateProject },
  { path: "/project-overview/:id", component: ProjectOverview },

  { path: "/create-survey/:id", component: CreateSurvey},
  // { path: "edit-survey/:id", component: EditSurvey},
  // { path: "view-survey-data/:id", component: ViewSurveyData},

  { path: "/users/lists", component: UserLists},
  { path: "/users/register", component: CreateUser},

 { path: "/roles/lists", component: RoleLists},
  { path: "/roles/create", component: CreateRole},

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
