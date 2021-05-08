import React from 'react';
import AppHeader from '../AppHeader/index';

const index = ({ commits, searchQuery }) => {
    return (
        <div>
            <AppHeader />
            <div className="main">
                <div className="center">
                    <h3>{searchQuery}</h3>
                </div>
                <ul>
                    {commits.map((commit, index) => (
                        <li key={index} className="blockWrap">
                            <div className="blockCol" style={{display: 'inline-table'}}> 
                                <img className="avatar" src={commit.committer.avatar_url} alt={commit.commit.author.name} />
                                <div>{commit.commit.author.name}</div>
                             </div>
                            <div className="blockCol"><b>{commit.commit.message}</b></div>
                            <div className="blockCol commit-datetime">{commit.commit.author.date}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default index
