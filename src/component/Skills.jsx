import React,{Component} from 'react'
import {faAws, faRProject} from "@fortawesome/free-brands-svg-icons"
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export default class Skills extends Component {
    render() {
        return (
            <div>
            <section className="ftco-section bg-light" id="skills-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                  <div className="col-md-12 heading-section text-center">
                    <span className="subheading">Skills</span>
                    <h2 className="mb-4">My Skills</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="media block-3 services d-block">
                        <div className="icon skill-icon"> <FontAwesomeIcon icon={faAws}/> </div>
                        <div className="media-body">
                        <h3 className="heading mb-3">Web Design</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-3">
                    <div className="media block-3 services d-block">
                        <div className="icon"><FontAwesomeIcon icon={faRProject}/></div>
                        <div className="media-body">
                        <h3 className="heading mb-3">Web Application</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-3">
                    <div className="media block-3 services d-block">
                        <div className="icon"><FontAwesomeIcon icon={faChartLine}/></div>
                        <div className="media-body">
                        <h3 className="heading mb-3">Web Application</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-3">
                    <div className="media block-3 services d-block">
                        <div className="icon"><FontAwesomeIcon icon={faRProject}/></div>
                        <div className="media-body">
                        <h3 className="heading mb-3">Web Application</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div> 
                    </div>
                </div>
              </div>
            </section>
          </div>
        );
      }
    }
