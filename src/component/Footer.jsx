import React,{Component} from 'react'
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

// TODO: remove target _blank for security issue
export default class Footer extends Component {
    render() {
        return (
            <section className="ftco-section" id="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-9 d-flex align-items-center ">
                            <a className="home-socials-font" href="https://github.com/siddartkumars" target="_blank">
                                <div className="icon skill-icon"> <FontAwesomeIcon icon={faGithubSquare}/> </div>
                            </a>

                            <a className="home-socials-font" href="https://www.linkedin.com/in/siddarth-kumar-s/" target="_blank">
                                <div className="icon skill-icon"> <FontAwesomeIcon icon={faLinkedin}/> </div>
                            </a>

                            <a className="home-socials-font" href="mailto:ssampath@syr.edu?Subject=Hello%!" target="_blank">
                                <div className="icon skill-icon"> <FontAwesomeIcon icon={faEnvelope}/> </div>
                            </a>
                            <p className="home-socials-font">
                                Designed & Developed by Siddarth
                            </p>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}

