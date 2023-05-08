import React from 'react';
import AOS from 'aos';
AOS.init();

const hero = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2019 - now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Principal Software Architect, SW & Product Development</span>
                                	<span className="d_company">Net Company Intrasoft</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2016 - 2019</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Solutions Architect, International Business Unit</span>
                                	<span className="d_company">UniSystems SA</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2015 - 2016</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Lead Software Enginner</span>
                                	<span className="d_company">Mega Channel / Tiletipos SA</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2017</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Master's degree, Architecting Distributed Cloud Applications</span>
                                    <span className="d_company">MITx</span>Computer Science Department.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2014 - 2016</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Master of Science (MSc), Information Technology</span>
                                    <span className="d_company">University of Piraeus</span>Computer Science Department.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2006 - 2007</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Master's degree, Science of Materials</span>
                                    <span className="d_company">National Technical University of Athens</span>Department of Chemical Engineering.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">1998 - 2004</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Diploma of Chemical Engineering</span>
                                    <span className="d_company">University of Patras</span>Department of Chemical Engineering.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}
export default hero;