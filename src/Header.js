import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand>WELCOME TO DRINKS APPLICATION </Navbar.Brand>
        <Link to="/" className="mr-5"> HOME </Link>

        <Link to="/favorite" className="mr-5"> FAVORITE DRINK </Link> 
        <Link to="/profile" className="mr-5"> PROFILE </Link>

        {isAuthenticated ? <LogoutButton /> : <LoginButton/>}
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
