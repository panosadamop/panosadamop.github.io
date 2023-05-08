import React from 'react';
import Typed from "react-typed";
import AOS from 'aos';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    return(
        <div className="v-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >I am Panagiotis Adamopoulos
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["Enterprise Architect  ", "Software Developer" ]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <ul className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <li><span>Address</span>Stenimachou 34, Nea Smirni, Athens</li>
                            <li><span>Telephone</span>+30 6934 786 024, +30 6942 052 019</li>
                            <li><span>Email</span>panagiotis@adamopoulos.online</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;