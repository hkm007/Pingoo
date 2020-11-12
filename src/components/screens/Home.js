import React from 'react';
import '../css/home.css';

function Home() {
    return (
        <>
           <div className="container mb-5 mt-5">
                <center><img src="data:image/jpeg;base64,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" id="myImg" alt="..." />
                <h1 className="display-4">Welcome to Pingoo</h1>
                <p className="lead">Final Destination for Bookish Keedas</p>
                <p>A unique store for all second hand world class books on your finger tips with cheapest price.</p></center>
            </div> 
        </>
    )
}

export default Home;