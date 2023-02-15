import React from 'react';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from 'aos';

AOS.init();


const hero = () => {
    return (
        <div className="v-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true">About Me</h2>
                        <div className="space-border"
                             data-aos="fade-up"
                             data-aos-delay="20"
                             data-aos-duration="1000"
                             data-aos-easing="ease"
                             data-aos-once="true"
                        ></div>
                    </div>
                    <div className="col-md-8  m-auto"
                         data-aos="fade-up"
                         data-aos-delay="60"
                         data-aos-duration="1000"
                         data-aos-easing="ease"
                         data-aos-once="true"
                    >
                        <p>Experienced Principal Software Architect with more than 15 years of experience in Software / Product Development Sector.
                        Strong in taking quick decisions and plan solutions to complicated problems and expert in communication with clients.
                        Strong experience in specification analysis and user documentation of complex software projects. </p>
                        <p><strong>Main responsibilities include:</strong> </p>
                        <ul>
                            <li>Managing multiple teams of people (Software Developers, UI / UX Designers, UI
                                Developers, Usability evaluators, Business Analysts, Testers)
                            </li>
                            <li> Software Design and Architecture</li>
                            <li> Specification Analysis</li>
                            <li> Task assignment and supervision</li>
                            <li> Code Review and best practice enforcement</li>
                            <li> Management of the development and project implementation</li>
                            <li> Acquiring and utilizing the necessary resources and skills within agree parameters and
                                costs, timescales and quality
                            </li>
                            <li> Review the project deliverables and monitoring the quality control activities.</li>
                        </ul>


                    <button className="btn-main"> Download Resume</button>
                </div>
            </div>

        </div>
</div>
)
    ;
}

export default hero;
