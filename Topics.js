import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';
import { ListHeader, SearchInput } from "react-onsenui";

class Topics extends React.Component {

    state = {
        topics: [
            {
                title: 'Frogs',
                created_by: 'username',
                term_count: 1,
                created_date: 111,
                modified_date: 111,
                published_date: 111,
                lang_terms: "en",
                lang_definitions: "en",
                terms: [
                    {
                        term: "Tree Frog",
                        definition: "Green",
                        image: null,
                        rank: 0
                    }
                ]
                
            },
            {
                title: 'Bats',
                created_by: 'username',
                term_count: 1,
                created_date: 111,
                modified_date: 111,
                published_date: 111,
                lang_terms: "en",
                lang_definitions: "en",
                terms: [
                    {
                        term: "Fruit Bat",
                        definition: "Black",
                        image: null,
                        rank: 0
                    }
                ]
                
            },
            {
                title: 'Squirrels',
                created_by: 'username',
                term_count: 1,
                created_date: 111,
                modified_date: 111,
                published_date: 111,
                lang_terms: "en",
                lang_definitions: "en",
                terms: [
                    {
                        term: "Red Squirrel",
                        definition: "Red",
                        image: null,
                        rank: 0
                    }
                ]
                
            }
        ],
        topicSearch: ''
    }

    render () {
        const { match } = this.props;
        const { topicSearch, topics } = this.state
        return (
            <div>
                <ListHeader>Topics</ListHeader>
                <SearchInput type="search" value={topicSearch} placeholder="Topic" onChange={this.handleChange}></SearchInput>                
                {
                    topicSearch ? topics.reduce((acc, topic) => {
                        if (topic.title.toLowerCase().includes(topicSearch.toLowerCase())) {
                          acc.push(<div className="topicListItem" key={topic.title}>
                                <Link key={topic.title} className={match.url === `/topics/${topic.title}` ? "topicListItem active" : "topicListItem"} to={`/topics/${topic.title}`}>{topic.title}</Link>
                            </div>
                          );
                        } 
                        return acc;
                    }, []) 
                    : topics.map((topic, index) => {
                        return (
                        <div className="topicListItem" key={topic.title}>
                            <Link key={topic.title} className={match.url === `/topics/${topic.title}` ? "topicListItem active" : "topicListItem"} to={`/topics/${topic.title}`}>{topic.title}</Link>
                        </div>
                        )
                    })
                }
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({
            topicSearch: e.target.value
        })
    }

    static propTypes = {
        match: PT.object.isRequired,
        userProfile: PT.object.isRequired
    }
}

export default Topics;