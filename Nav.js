import React from 'react';
import PT from 'prop-types';
import { NavLink } from "react-router-dom";

function Nav ({ match, userProfile }) {
    return (
        <div id="navbar">
            <NavLink className="navbar" to="/">Home</NavLink> 
            <NavLink className="navbar" to="/topics">Topics</NavLink> 
            <NavLink className="navbar" to={`/users/${userProfile.id}/achievements`}>Achievements</NavLink> 
        </div>
    );
}

Nav.propTypes = {
    match: PT.object.isRequired,
    userProfile: PT.object.isRequired
}

export default Nav;