import React, {  useState } from 'react';
// import Button from '../Button/index';

const Index = () => {
    // https://api.github.com/repos/foluwa/foluwa/commits
    const [isLoading, setLoading] = useState(false);


    const fetchCommits = () => {
        setLoading(true);
    }
    console.log({ isLoading });
    return (
        <div className="main">

            <div className="center banner-text">
                Discover the <br />world of code
            </div>

            <div className="center text-desc">
                Explore open source projects from GitHub, and read their commit history to
                see the story of how they were built.
                </div>

            <div className="center">
                <input type="text" value="microsoft/vscode" />
                <input type="submit" value="See commits 🚀" onClick={fetchCommits} />
            </div>

            <p className="center">Or pick one of these suggested repos</p>

            <div className="center suggested-repos-list">
                <a href="/#" className="suggested-repos">
                    django/django
                </a>
                <a href="/#" className="suggested-repos">
                    django/django
                </a>
                <a href="/#" className="suggested-repos">
                    django/django
                </a>
                <a href="/#" className="suggested-repos">
                    django/django
                </a>
            </div>

        </div>
    )
}

export default Index
