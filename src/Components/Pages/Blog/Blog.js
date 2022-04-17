import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark text-white p-4'>
            <h1 className='p-4'>Welcome To My Blogs</h1>
            <div className='container'>
                <div className='border mb-4 p-4'>
                <h6><span>Question-1:</span>What is the difference between authorization and authentication?</h6>
                <p><span>Answer: </span></p>
                </div>

                <div className='border mb-4 p-4'>
                <h6><span>Question-2:</span>Why are you using firebase? What other options do you have to implement authentication?</h6>
                <p><span>Answer: </span></p>

                </div>

                <div className='border mb-4 p-4'>
                <h6><span>Question-3:</span>What other services does firebase provide other than authentication?</h6>
                <p><span>Answer: </span></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;