import React,{Component} from 'react'

import {Client} from 'node-rest-client';
var api_call_client= new Client();
var repo_list = 10;

// TODO: Fix the GitHub API
export default class Projects extends Component {
    constructor(props) {
        super(props);
        api_call_client.get("https://api.github.com/users/yuujay/repos", function (data, response) {
            repo_list = data;
            console.log(repo_list);
        });
        this.state = {list_prop: "LISTTTTTTTT"};
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <section className="ftco-about ftco-counter img ftco-section" id="projects-section">
                <h2>{this.state.list_prop}</h2>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                    <span className="subheading">What I Do</span>
                    <h2 className="mb-4">Some of my highlight projects</h2>
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
                </section>
            </div>
        )
    } 
}
