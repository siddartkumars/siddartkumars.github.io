import React,{Component} from 'react'

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
                    <div className="col-md-6">
                    <div className="media block-6 services d-block">
                        <div className="icon"><span className="flaticon-analysis" /></div>
                        <div className="media-body">
                        <h3 className="heading mb-3">Web Design</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div className="media block-6 services d-block">
                        <div className="icon"><span className="flaticon-analysis" /></div>
                        <div className="media-body">
                        <h3 className="heading mb-3">Web Application</h3>
                        <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ">
                      <h3>Photoshop</h3>
                      <div className="progress">
                        <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ">
                      <h3>jQuery</h3>
                      <div className="progress">
                        <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                          <span>60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ">
                      <h3>HTML5</h3>
                      <div className="progress">
                        <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ">
                      <h3>CSS3</h3>
                      <div className="progress">
                        <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ">
                      <h3>WordPress</h3>
                      <div className="progress">
                        <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                          <span>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ">
                      <h3>SEO</h3>
                      <div className="progress">
                        <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                          <span>80%</span>
                        </div>
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
