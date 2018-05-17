import React from 'react';
import { ListHeader } from "react-onsenui";
import PT from 'prop-types';

class Achievements extends React.Component {
    render () {
        const { id } = this.props.userProfile
        return (
            <div>
                <ListHeader>Achievements</ListHeader>
                {id ? <div className="login achievements">
                        Achievements
                    </div> 
                    :
                    <div className="login achievements">Login</div>}
            </div>
        );
    }

    static propTypes = {
        userProfile: PT.object.isRequired
    }
}

export default Achievements;