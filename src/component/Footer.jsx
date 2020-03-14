import React,{Component} from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section className="ftco-section ftco-hireme">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-9 d-flex align-items-center ">
                        <h2>I'm <span>Available</span> For Freelancing</h2>
                        </div>
                        <div className="col-md-4 col-lg-3 d-flex align-items-center ">
                        <p className="mb-0"><a href="#" className="btn btn-white py-4 px-5">Hire me</a></p>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}

