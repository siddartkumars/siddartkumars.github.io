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
              
            {/* <div><i className="fab fa-aws"></i></div> */}
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
                <div className="row justify-content-center py-5 mt-5">
                  <div className="col-md-12 heading-section text-center ">
                    <span className="subheading">What I Do</span>
                    <h2 className="mb-4">Strategy, design and a bit of magic</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 text-center d-flex ">
                    <div className="services-1">
                      <span className="icon">
                        <i className="flaticon-analysis" />
                      </span>
                      <div className="desc">
                        <h3 className="mb-5"><a href="#">Explore</a></h3>
                        <h4>Design Sprints</h4>
                        <h4>Product Strategy</h4>
                        <h4>UX Strategy</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center d-flex ">
                    <div className="services-1">
                      <span className="icon">
                        <i className="flaticon-flasks" />
                      </span>
                      <div className="desc">
                        <h3 className="mb-5"><a href="#">Create</a></h3>
                        <h4>Information</h4>
                        <h4>UX/UI Design</h4>
                        <h4>Branding</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center d-flex ">
                    <div className="services-1">
                      <span className="icon">
                        <i className="flaticon-ideas" />
                      </span>
                      <div className="desc">
                        <h3 className="mb-5"><a href="#">Learn</a></h3>
                        <h4>Prototyping</h4>
                        <h4>User Testing</h4>
                        <h4>UI Testing</h4>
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
