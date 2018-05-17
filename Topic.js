import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

class Topic extends React.Component {
    render () {
        const { topic } = this.props.match.params;
        return (
            <div>
                <Link className="learnOrTestButton" to={`/topics/${topic}/learn`} >{`Learn about ${topic}`}</Link>
                <Link className="learnOrTestButton" to={`/topics/${topic}/test`} >{`Take a test about ${topic}`}</Link>
                <p>Related datasets...</p>
            </div>
        );
    }

    static propTypes = {
        userProfile: PT.object.isRequired,
        match: PT.object.isRequired
    }
}

export default Topic;