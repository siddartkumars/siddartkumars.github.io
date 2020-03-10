import React,{Component} from 'react'

export default class Home extends Component {
    render() {
        return (
            <section id="home-section" class="hero">
            <div class="home-slider  owl-carousel">
            <div class="slider-item ">
                <div class="overlay"></div>
              <div class="container">
                <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                    <div class="one-third order-md-last img">
                        <div class="overlay"></div>
                    </div>
                   <div class="text">
                            <span class="subheading">Hello</span>
                          <h1 class="mb-4 mt-3">I'm <span>Niko Bochser</span></h1>
                          <h2 class="mb-4">A Freelance Web Developer</h2>
                          <p><a href="#" class="btn-custom">Hire me</a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
  
            <div class="slider-item">
                <div class="overlay"></div>
              <div class="container">
                <div class="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                    <div class="one-third order-md-last img" style={{backgroundImage:url(images/bg_2.jpg)}}>
                        <div class="overlay"></div>
                    </div>
                    <div class="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                        <a href="https://vimeo.com/45830194" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                  <span class="ion-ios-play play"></span>
                              </a>
                        <div class="text">
                          <h1 class="mb-4 mt-3">I'm a <span>web designer</span> from Scotland</h1>
                          <p><a href="#" class="btn-custom">Hire me</a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
         </section>

            
        )
    }
}
