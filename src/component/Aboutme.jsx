import React,{Component} from 'react'

export default class Aboutme extends Component {
    render() {
        return (
            <div>
            <section className="ftco-about ftco-counter img ftco-section" id="about-section">
              <div className="container">
                <div className="row d-flex">
                  <div className="col-md-6 col-lg-5 d-flex">
                    <div className="img-about img d-flex align-items-stretch">
                      <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: 'url(assets/images/about-me-sidd.JPG)', height: '80vh', width: '100vh'}}>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
                     <div className="row justify-content-start pb-3">
                      <div className="col-md-12 heading-section ">
                        <span className="subheading">Hello</span>
                        <h2 className="mb-4" style={{fontSize: '34px', textTransform: 'capitalize'}}>About Me</h2>
                        <p>My Name is Siddarth Kumar S and I am a Data Scientist</p>
                        Aliquip excepteur amet sit ex elit id cillum laborum aliquip est ut eiusmod sunt. Officia veniam eiusmod est ullamco anim in incididunt. Exercitation velit aliqua labore ullamco esse ut veniam officia exercitation consequat voluptate minim sunt.
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
       

