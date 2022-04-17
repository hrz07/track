import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogContainer'>
            <div className='qa-box'>
                <h2>Difference between authentication and authorization ?</h2>
                <p>Authentication is a system to verify a person who is this. Authentication system is changeable by user. In the other side, Authorization means what type of data user can data user can access or use. Authorization system is not changeable by user.</p>
            </div>
            <div className='qa-box'>
                <h2>Why you using firebase ?</h2>
                <p>Firebase provide us real-time database system which is provided by google. Firebase is very easy to use and safe. It is useable from all platform. </p>
                <p>Here some Alternatives of firebase:</p>
                <li>Parse</li>
                <li>Back4App</li>
                <li>AWS Amplify</li>
                <li>Kuzzle</li>
                <li>Couchbase</li>
            </div >
            <div className='qa-box'>
                <h2>Services of firebase</h2>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Authentication</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Analytics</li>
               
            </div>
        </div>
    );
}

export default Blog;
