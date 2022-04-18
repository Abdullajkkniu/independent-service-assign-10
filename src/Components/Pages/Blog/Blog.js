import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark text-white p-4'>
            <h1 className='p-4 '>Welcome To My Blogs</h1>
            <div className='container w-75'>
                <div className='border mb-4 p-5'>
                <h6><span className='text-primary'>Question-1 : </span> What is the difference between authorization and authentication?</h6>
                <p><span className='text-primary'>Answer: </span> 1. Authentication is a user verified system. on the other hand , authorization means what resources a user can acces </p>
                <p>2. Authentication works when an user provided his information such as- passwords, one-time pins, biometric information etc. On the other hand, Authorization works through settings that are implemented and maintained by the organization.</p>
                <p>3.Authentication is visible to and partially changeable by the user. One the other hand , Authorization isn't visible to the user.</p>
                </div>
                <br />
                <div className='border mb-4 p-4'>
                <h6><span>Question-2:</span>Why are you using firebase? What other options do you have to implement authentication?</h6>
                <p><span>Answer: It provides backend services. It is easy to use SDKs, and ready-made UI libraries to authentication. It supports authentication by using passoword, phone numbers, email. Besides these there are some popular federated identify providers like Google, Github, facebook etc. 
                    
                There are some other options for authentication like- Auth0, MongoDB, Okta etc.  </span></p>

                </div>

                <div className='border mb-4 p-4'>
                <h6><span>Question-3:</span>What other services does firebase provide other than authentication?</h6>
                <p><span>Answer:  Firebase provides different kinds of services. It helps to develop high-quality mobile and web applications to grow business. It is compatible with Web, iOS, Android, and OS X clients. There are some other services that firebase provides such as- Cloud Firebase, coud function, Hosting, Cloud Storage, Cloud messaging etc. So we can say that it is a full package that helop in developing your mobile or web applications. </span></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;