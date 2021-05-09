import React, {Fragment} from 'react';
import AppHeader from '../AppHeader/index';

const index = ({ commits, searchQuery }) => {
    // Formate date
    const formatDate = (date) => {
        return (new Date(date)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    }
    return (
        <div>
            <AppHeader />
            <div className="main">
                <div className="center">
                    <h3 className="search-query">{searchQuery}</h3>
                </div>
                <div className="container">
                    {commits.map((commit, index) => (
                        <Fragment key={index} >
                            <div className="item"> 
                                <img className="avatar" src={commit.committer.avatar_url} alt={commit.commit.author.name} />
                                <div className="author-name">{commit.commit.author.name}</div>
                            </div>
                            <div className="item commit-message message-date"> {commit.commit.message} </div>
                            <div className="item commit-date message-date"> {formatDate(commit.commit.author.date)} </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default index
