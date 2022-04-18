import React from 'react';
import '../About/About.css';
import image1 from '../../../Images/formal.jpg';

const About = () => {
    return (
        <div className='bg-dark text-white pb-5'>
            <h1 className='p-3'>About Me</h1>
            <div className='container set-grid border'>
                <div>
                    <img className='img-resize w-100' src={image1} alt="" />
                </div>
                <div>
                    <h2>Md. Abdul Alim</h2>
                    <p>My Goal: Hello everybody. Today i'm going to disclose my goal. After finishing this course, i will try to get an internship oppertunity to be a professional web developer. Then i will try to get a full time job in any well known IT company. </p>

                    <br />
                    <p>At this moment i am focusing on more practice to achive my goal, althouth it is very difficult to manage proper time for practicing but i'm still confident for giving my best. Please stay with me. Thank you very much.</p>
                </div>
            </div>
        </div>
    );
};

export default About;