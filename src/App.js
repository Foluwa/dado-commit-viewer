import React, { useEffect, useState } from "react";
import axios from 'axios';
import AppHeader from './components/AppHeader';
import Loading from './components/Loading';
import ListCommits from './components/ListCommits';
import './App.css';


const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [commitData, setCommitData] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    reponame: "" 
  });
  const [trendingRepo, setTrendingRepo] = useState([]);
  const [searchborderColor, setSearchborderColor] = useState(false);
  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  // }

  const handleHover = () => {
    setSearchQuery({ reponame: "microsoft/vscode" });
    searchQuery.reponame = "microsoft/vscode";
    setSearchborderColor(true);
  }
  const undoHandleHover = () => {
    setSearchborderColor(false);
  }

  const fetchCommits = () => {
    setLoading(true);
    console.log(`https://api.github.com/repos/${searchQuery.reponame}/commits?per_page=10`)
    axios.get(`https://api.github.com/repos/${searchQuery.reponame}/commits?per_page=10`)
      .then((response) => {
        setCommitData(response.data);
      });

  }

  const fetchTrending = (user) => {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        if(typeof response !== 'undefined' && response){
        setTrendingRepo(response.data.slice(0, 4));
        }

      });
      
  }
  const suggestedRepo = (data) => {
    setCommitData(data)
  }

  useEffect(() => {
    // fetchTrending('foluwa');
    console.log('Iwas called');
  }, []);


  return (
    (!commitData.length) ? ((isLoading) ? (<Loading />) : (<div>
      <AppHeader />
      <div className="main">
        <div className="center banner-text">
          Discover the <br />world of code
        </div>

        <div className="center text-desc">
          <p>
            Explore open source projects from GitHub, and read their commit history to
            see the story of how they were built.
          </p>

        </div>

        <div className="center">
          <div className="section group">
            <div className="col span_2_of_2">
              {/* This is column 1 */}
              <input type="text" name="reponame"
                onChange={handleChange}
                onKeyUp={handleChange}
                value={searchQuery.reponame}
                onMouseEnter={handleHover}
                onMouseLeave={undoHandleHover}
                style={{ borderColor: searchborderColor ? '#000' : '#DFE4EA' }}
              />

            </div>
            {/* border-color */}
            <div className="col span_1_of_2">
              <input
                type="submit"
                value="See commits 🚀"
                onClick={fetchCommits}
              />
              {/* This is column 2 */}
            </div>
          </div>
        </div>

        <p className="center">Or pick one of these suggested repos</p>

        <div className="center suggested-repos-list">
          {trendingRepo.map((trending, index) => (
            <a onClick={suggestedRepo(trending)} href="/#" key={index} className="suggested-repos">folwa/{trending.name}</a>
          ))}


          {/* // trendingRepo */}

          {/* <a href="/#" className="suggested-repos">django/django</a>
          <a href="/#" className="suggested-repos">django/django</a>
          <a href="/#" className="suggested-repos">django/django</a> */}
        </div>
      </div>
    </div>)) : (<ListCommits commits={commitData} searchQuery={searchQuery.reponame} />));


}


export default App;
