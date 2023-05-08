import React from 'react';

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://panosadamop.github.io" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; Copyright 2022 - 2023 Panagiotis Adamopoulos</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/padamopoulos/" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.drupal.org/user/2290702/" rel="noreferrer"><i className="fa fa-drupal"></i></a>
                            <a href="https://www.github.com/panosadamop" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;