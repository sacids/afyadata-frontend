import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

import AuthService from 'services/auth-service'

const Logout = props => {

  //use effect
  useEffect(() => {
    authService.Logout();
  })

  //redirect to login
  props.history.push('/');
}

export default withRouter(Logout)
