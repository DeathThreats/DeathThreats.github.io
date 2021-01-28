import { Link } from 'react-scroll';
import { Link as LinkToPage } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import img12 from '../assets/img12.svg';
import img1 from '../assets/img1.svg';
import python from '../assets/rounded/py.png';
import ProfileImg from '../assets/ProfileImg.webp';
import mail_loop from '../assets/mail_loop.webm';
import nodejs from '../assets/rounded/nodejs.jpg';
import express from '../assets/rounded/express.jpg';
import react from '../assets/rounded/react.png';
import angular from '../assets/rounded/angular.png';
import vue from '../assets/rounded/vue.png';
import php from '../assets/rounded/php.png';
import sql from '../assets/rounded/sql.jpg';
import mongodb from '../assets/rounded/mongodb.png';
import { gsap } from "gsap";

function Home() {

    useEffect(() => {
        fetchData();
    }, []);

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const fetchData = async () => {
        const url = ['https://api.github.com/repos/deaththreats/DeathThreats.github.io', 'https://api.github.com/repos/deaththreats/PHPLoginSystem'];
        const firstData = await fetch(url[0]);
        const secondData = await fetch(url[1]);
        let data1 = await firstData.json();
        let data2 = await secondData.json();
        data1 = {
            year: data1.updated_at.slice(0, 4),
            month: data1.updated_at.slice(5, 7),
            day: data1.updated_at.slice(8, 10)
        }
        setData1(data1);
        setData2(data2);
    }

    useEffect(() => {
        gsap.from(".titleHead", 1, {
            ease: "power3.out",
            y:50,
            opacity:0,
            stagger: {
                amount: .15
            }
        });
        gsap.from(".titleImg", 1, {
            delay:1,
            ease:"power3.out",
            x:-50,
            opacity:0
        });
        gsap.from(".titleBtn", 1, {
            delay:1.5,
            ease:"power3.out",
            y:-20,
            opacity:0
        });
    }, [])

    return (
        <div>
            <div className="homepage" id="top">
                <div className="container row d-flex m-auto">
                    <div className="col-lg-5 block heading-img titleImg">
                        <img src={img12} className="img1" alt="Character"/>
                    </div>
                    <div className="col-lg-7 block heading">
                            <h1 className="titleHead">AUGUSTIN NALZARO</h1>
                            <p className="text-dark titleHead">Self-Learning Software Engineering and Computer Science through Research and Development</p>
                            <div className="num font-italic titleHead"><span className="date">Last updated: <span className="count"> {data1.year}</span>-<span className="count">{data1.month}</span>-<span className="count">{data1.day}</span></span></div>
                    </div>
                </div>
                <Link className="viewMoreBtn titleBtn" id="scroll" type="button" to="about"smooth={true} duration={700}><span className="view-text">Read More</span> 
                    <svg viewBox="0 0 14 20" height="3rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="arrowDown"><g id="second"><path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M0.646001 6.646C0.692447 6.59944 0.747622 6.56249 0.808368 6.53729C0.869113 6.51208 0.934234 6.49911 1 6.49911C1.06577 6.49911 1.13089 6.51208 1.19163 6.53729C1.25238 6.56249 1.30756 6.59944 1.354 6.646L7 12.293L12.646 6.646C12.7399 6.55211 12.8672 6.49937 13 6.49937C13.1328 6.49937 13.2601 6.55211 13.354 6.646C13.4479 6.73989 13.5006 6.86723 13.5006 7C13.5006 7.13278 13.4479 7.26011 13.354 7.354L7.354 13.354C7.30756 13.4006 7.25238 13.4375 7.19163 13.4627C7.13089 13.4879 7.06577 13.5009 7 13.5009C6.93423 13.5009 6.86911 13.4879 6.80837 13.4627C6.74762 13.4375 6.69245 13.4006 6.646 13.354L0.646001 7.354C0.599438 7.30756 0.562495 7.25238 0.537289 7.19163C0.512082 7.13089 0.499107 7.06577 0.499107 7C0.499107 6.93423 0.512082 6.86911 0.537289 6.80837C0.562495 6.74762 0.599438 6.69245 0.646001 6.646V6.646Z" fill="black"/></g><g id="first"><path id="Vector_1" fillRule="evenodd" clipRule="evenodd" d="M0.646001 0.146894C0.692447 0.10033 0.747622 0.0633878 0.808368 0.0381813C0.869113 0.0129749 0.934234 0 1 0C1.06577 0 1.13089 0.0129749 1.19163 0.0381813C1.25238 0.0633878 1.30756 0.10033 1.354 0.146894L7 5.79389L12.646 0.146894C12.6925 0.100406 12.7477 0.0635297 12.8084 0.0383706C12.8692 0.0132115 12.9343 0.00026226 13 0.00026226C13.0657 0.00026226 13.1308 0.0132115 13.1916 0.0383706C13.2523 0.0635297 13.3075 0.100406 13.354 0.146894C13.4005 0.193382 13.4374 0.248571 13.4625 0.30931C13.4877 0.37005 13.5006 0.43515 13.5006 0.500894C13.5006 0.566638 13.4877 0.631738 13.4625 0.692477C13.4374 0.753217 13.4005 0.808406 13.354 0.854894L7.354 6.85489C7.30756 6.90146 7.25238 6.9384 7.19163 6.96361C7.13089 6.98881 7.06577 7.00179 7 7.00179C6.93423 7.00179 6.86911 6.98881 6.80837 6.96361C6.74762 6.9384 6.69245 6.90146 6.646 6.85489L0.646001 0.854894C0.599438 0.808448 0.562495 0.753273 0.537289 0.692528C0.512082 0.631782 0.499107 0.566661 0.499107 0.500894C0.499107 0.435127 0.512082 0.370005 0.537289 0.30926C0.562495 0.248515 0.599438 0.193339 0.646001 0.146894V0.146894Z" fill="black"/></g></g></svg>
                </Link>
            </div>
            <div className="about-holder text-light" id="about">
                <div className="container">
                    <h2 className="display-4 font-weight-bold">About</h2>
                    <div className="row flexed-center">
                        <p className="text-justify col-lg-9">
                        Hi!, I'm Augustin Nalzaro - a 'sometimes' web developer and currently a student at Indiana Aerospace University, majoring in Bachelor of Science in Aircraft Maintenance Technology. I have always admired aviation-related things, topics, videos and for the longest time, I've always been passionate about flying.<br/><br/>
                        I consider coding as a hobby and I've worked from front to back-end web development using the good old HTML, CSS and JavaScript combo, the much more advanced VueJS, Facebook's React, and a little bit of AngularJS for the front-end, then I started implementing the back-end using PHP and NodeJS, then MYSQL or MongoDB for Databases.
                        </p>
                        <div className="col-lg-3 ProfileImg-holder">
                            <img src={ProfileImg} className="ProfileImg" alt="Profile"/>
                        </div>
                    </div>
                    <div className="row about-ul">
                        <div className="col-lg-4">
                            <h5>Software Development</h5>
                            <ul>
                                <li>Full Stack Web Apps</li>
                                <li>Single Page Apps(SAP) with React</li>
                                <li>Cloud Computing, Microservices, APIs</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5>GitHub</h5>
                            <ul>
                                <li>PHP Mail & PHP Mailer</li>
                                <li>PHP Login System</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5>Arduino</h5>
                            <ul>
                                <li>Buzzered Sensors</li>
                                <li>Temperature Sensors</li>
                                <li>Obstacle Detection and Avoidance - C++</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-holder flexed-center py-3">
                <div className="container">
                    <div className="row more flexed-center">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <h1 className="display-4 font-weight-bold">Get to Know More About me!</h1>
                            <h6>Want to hire me? or just want additional info?</h6><br/>
                            <a href="/cv" className="btn btn-primary disabled">Download CV</a>
                        </div>
                        <div className="col-lg-4 flexed-center">
                            <img src={img1} alt="Man w/ backpack" />
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
            <div className="services-holder text-light">
                <div className="container services">
                    <div className="row text-justify">
                        <div className="col-lg-4 video_loop flexed-center user-select-none">
                            <video src={mail_loop} loop autoPlay width="100%" />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <h1 className="display-4 services-heading">Need my Service?</h1>
                            <p>Great! I'm always open to business inquiries. To reach me, you can always <LinkToPage to="/contact" data-toggle="tooltip" data-placement="bottom" title="Contact">Contact</LinkToPage> or Message me through my social media accounts. The services offered includes but is not limited to the following:</p><br/>
                            <ol>
                                <li>Static Website Building (stylish, modern, minimalistic... web design)</li>
                                <ul>
                                    <li>Portfolio Website</li>
                                </ul><br/>
                                <li>Dynamic and User Responsive Website, front to back-end (scalable)</li>
                                <ul>
                                    <li>E-Commerce Website</li>
                                </ul><br/>
                                <li>Website Deployment</li>
                                <ul>
                                    <li>preferably on <a href="https://heroku.com"rel="noopener noreferrer"target="blank" data-toggle="tooltip" data-placement="bottom" title="Heroku">Heroku</a> or <a href="https://digitalocean.com"rel="noopener noreferrer"target="blank" data-toggle="tooltip" data-placement="bottom" title="Digital Ocean">Digital Ocean</a>, but I can work with other platforms as well.</li>
                                </ul>
                            </ol><br/>
                            <p>Can't find the right one? No Problem! just message me and I'll do my best to make that happen!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container jumbotron languages py-5 mb-5 ventures text-center text-dark">
                <h1>What I have tried...</h1>
                <p>languages and framworks I've worked with in the past</p>
            </div>
            <div className="container text-center languages-img-holder marketing my-5">
                <div className="row">
                <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={python} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Python"/>
                        <h2>Python</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={nodejs} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Artificial Intelligence"/>
                        <h2>Node JS</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={express} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Game Development"/>
                        <h2>Express JS</h2>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={react} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Web Design"/>
                        <h2>React JS</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={vue} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Mobile App Development"/>
                        <h2>Vue JS</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={angular} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Databases"/>
                        <h2>Angular JS</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={php} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Java"/>
                        <h2>PHP</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={mongodb} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Machine Learning"/>
                        <h2>Mongo DB</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={sql} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="JavaScript"/>
                        <h2>SQL</h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pb-5 pt-4">
                <div className="jumbotron text-dark shadow-lg border-left rounded-0 border-primary bg-light">
                    <h1>Popular on GitHub</h1><br/>
                    <div className="table-responsive-lg">
                        <table className="table text-nowrap table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Language</th>
                                    <th scope="col">File Size (kb)</th>
                                    <th scope="col">Open Issues</th>
                                </tr>
                            </thead>
                            <tbody><tr><td><a href={data2.html_url} target="_blank"rel="noopener noreferrer">{data2.name}</a></td><td>{data2.description}</td><td>{data2.language}</td><td>{data2.size}</td><td>{data2.open_issues}</td></tr></tbody>
                        </table>
                    </div>
                    <div className="container text-center mt-4">
                        <LinkToPage to="/software" data-toggle="tooltip" className="btn btn-outline-primary py-2 px-3" data-placement="bottom" title="View all">View all</LinkToPage>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;