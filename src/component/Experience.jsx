import React,{Component} from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class Experience extends Component {
    render() {
      return (
        <div>
          <section className="ftco-about ftco-counter img ftco-section" id="experience-section">
            <div className="row justify-content-center py-5 mt-5">
              <div className="col-md-12 heading-section text-center ">
                <span className="subheading">What I Do</span>
                <h2 className="mb-4">Strategy, design and a bit of magic</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <a href="assets/resume.txt">
                  <img className="resume-logo" src="img/resumeIcon.png" height="80" alt="Download My Resume."/>
                </a>
                <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key="001"
                  dateText="11/2010 – Present"
                  style={{ color: '#e86971' }}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Data Scientist I</h3>
                  <h4>RealPage.Inc</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="04/2009 – 11/2010"
                  dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3 style={{ color: '#61b8ff' }}>Data Analyst Intern</h3>
                  <h4 style={{ color: '#61b8ff' }}>Buildium</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
              </Timeline>
              </div>                
            </div>
          </section>
        </div>
        )
    }
}
