import React from 'react';
import AOS from 'aos';
AOS.init();

const whatido = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <div className="text">
                                <h3>Enterprise Architecture and Design</h3>
                                Provides a holistic and strategic view of an organization's information systems, processes, and technology infrastructure. It aims to align an organization's business and IT strategies and capabilities to achieve its objectives.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <div className="text">
                                <h3>Software Desing & Implementation</h3>
                                During software implementation, the design is translated into code, and the software is built, tested, and deployed. This phase involves writing the actual code that implements the design, testing the code to ensure it functions as intended, and integrating the code with other components of the software system.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <div className="text">
                                <h3>Project Management & Specification Analysis</h3>
                                The successful analysis and completion of a project from start to finish, balancing competing demands and manage risks to ensure that projects are completed on time, within budget, and to the satisfaction of all stakeholders.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatido;