import React from 'react';
// import { Link } from "react-router-dom";
import PT from 'prop-types';

function Home ({ match }) {
    return (
        <div className="home" id="home">
            <div id="flashcubeHomeLogoContainer">
                <img id="flashcubeHomeLogo" src="flashcubelogo.png" alt=""/>    
            </div>       
        </div>
    );
}

Home.propTypes = {
    match: PT.object.isRequired,
    userProfile: PT.object.isRequired
}


export default Home;