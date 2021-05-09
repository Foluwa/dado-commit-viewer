import React from 'react'
import AppHeader from '../AppHeader/index';
function index({searchQuery}) {
    return (
        <div>
            <AppHeader />
            <div className="main">
                <div className="center">
                    <h3>{searchQuery}</h3>
                   
                </div>
                <div className="center"> <p>Loading ...</p></div>
            </div> 
        </div>
    )
}

export default index;