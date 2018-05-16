import React, { Component } from 'react';
import { fire } from '../config/Fire'

class Home extends Component {


    logout = () => {
        fire.auth().signOut();
    }


    render() {

        return (

            <div>
                Hello
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;