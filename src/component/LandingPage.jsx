import React,{Component} from 'react'

// TODO: Fix reloading issue with home and about me section
export default class LandingPage extends Component {
    render() {
      return (
        <div>
          <section className="ftco-about ftco-counter img ftco-section" id="home-section">
            <div className="container" id="landing-pg">
                <h3 className="animated animatedFadeInUp fadeInUp" style={{animationDuration: "1s"}}> HI I am Sid! </h3>
                <h1 className="animated animatedFadeInUp fadeInUp" style={{animationDuration: "2.5s"}}>Siddharth</h1>
                <h2 className="animated animatedFadeInUp fadeInUp" style={{animationDuration: "3s"}}>Data is my bread and butter!</h2>
                <p>I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p> 
            </div>
          </section>
        </div>
        )
    }
}
