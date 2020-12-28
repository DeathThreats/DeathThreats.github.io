import '../styles/App.css';
import { Link } from 'react-scroll';
import { Link as LinkToPage } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import img12 from '../assets/img12.svg';
import img13 from '../assets/img13.png';
import img1 from '../assets/img1.svg';
import rounded1 from '../assets/rounded/ai.png';
import rounded2 from '../assets/rounded/db.jpg';
import rounded3 from '../assets/rounded/game.png';
import rounded4 from '../assets/rounded/java.png';
import rounded5 from '../assets/rounded/js.png';
import rounded6 from '../assets/rounded/md.png';
import rounded7 from '../assets/rounded/ml.png';
import rounded8 from '../assets/rounded/py.png';
import rounded9 from '../assets/rounded/wd.png';
import ProfileImg from '../assets/ProfileImg.svg';
import mail_loop from '../assets/mail_loop.webm'

function Home() {

    useEffect(() => {
        fetchData();
    }, []);

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const fetchData = async () => {
        const url = ['https://api.github.com/repos/deaththreats/react-app', 'https://api.github.com/repos/deaththreats/PHPLoginSystem'];
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
    return (
        <div>
            <div className="cover d-flex flex-column" id="top">
                <div className="img-bg">
                    <img src={img12} className="img1" alt="Character 1"/>
                    <img src={img13} className="img2" alt="Character 2"/>
                </div>                
                <div className="header-holder">
                    <div className="container heading text-center">
                        <h1>AUGUSTIN NALZARO</h1>
                        <p>Self-Learning Software Engineering and Computer Science through Research and Development</p><br/>
                        <div className="num"><span className="date">Last updated: <span className="count">{data1.year}</span> | <span className="count">{data1.month}</span> | <span className="count">{data1.day}</span></span></div>
                    </div>
                    <Link className="viewMoreBtn text-dark" id="scroll"type="button" to="about"smooth={true} duration={700}>View More <svg width="3em" viewBox="0 0 16 16"className="bi bi-arrow-bar-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"d="M11.354 10.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L8 12.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path fillRule="evenodd"d="M8 6a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-1 0V6.5A.5.5 0 0 1 8 6zM2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" /></svg></Link>
                </div>
            </div>
            <div className="bg-dark text-light about-holder" id="about">
                <div className="container about">
                    <h2 className="display-4 font-weight-bold">About</h2>
                    <div className="row flexed-center">
                        <p className="text-justify col-lg-9">
                        Hi!, I'm Augustin Nalzaro - a 'sometimes' web developer and currently a student at Indiana Aerospace University, majoring in Bachelor of Science in Aircraft Maintenance Technology. I have always admired aviation-related things, topics, videos and for the longest time, I've always been passionate about flying.<br/><br/>
                        I consider coding as a hobby and I've worked from front to back-end web development using the good old HTML CSS and JavaScript combo, the much more advanced VueJS, Facebook's React, and a little bit of AngularJS for the front-end, then I started implementing the back-end using PHP and NodeJS, then MYSQL or MongoDB for Databases.
                        </p>
                        <div className="col-lg-3 ProfileImg-holder">
                            <img src={ProfileImg} className="ProfileImg" alt="Profile"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h5>Software Development</h5>
                            <ul>
                                <li>Full Stack Web Apps</li>
                                <li>Single Page Web Apps with React</li>
                                <li>Cloud Computing, Microservices, APIs</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5>Github</h5>
                            <ul>
                                <li>PHP Mail & PHP Mailer</li>
                                <li>PHP Login System (Boiler Plate)</li>
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
            <div className="more-holder flexed-center">
                <div className="container">
                    <div className="row more flexed-center">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <h1 className="display-4 font-weight-bold">Get to Know More About me!</h1>
                            <h6>Want to hire me? or just want additional info?</h6><br/>
                            <a href="/cv" className="btn btn-outline-primary">Download CV</a>
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
                            <p>Great! I'm always open to business inquiries. To reach me, you can always <LinkToPage to="/contact">Contact</LinkToPage> or Message me through my social media accounts. The services offered includes but is not limited to the following:</p><br/>
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
                                    <li>preferably in <a href="https://digitalocean.com"rel="noopener noreferrer"target="blank">Digital Ocean</a> or <a href="https://heroku.com"rel="noopener noreferrer"target="blank">Heroku</a> (for dynamic website only)</li>
                                </ul>
                            </ol><br/>
                            <p>Can't find the right one? No Problem! just message me and I'll do my best to make that happen!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary ventures py-5 mb-5 text-center ">
                <h1 className="display-3">My Ventures</h1>
                <p>Teach myself and/or expand my knowledge about them</p>
            </div>
            <div className="container text-center marketing my-5">
                <div className="row">
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded7} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Machine Learning"/>
                        <h2>Machine Learning</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded1} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Artificial Intelligence"/>
                        <h2>Artificial Intelligence</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded3} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Game Development"/>
                        <h2>Game Development</h2>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded9} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Web Design"/>
                        <h2>Web Design</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded6} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Mobile App Development"/>
                        <h2>Mobile App Development</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded2} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Databases"/>
                        <h2>Databases</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded4} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Java"/>
                        <h2>Java</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded8} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="Python"/>
                        <h2>Python</h2>
                    </div>
                    <div className="col-md-4"> <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                            src={rounded5} preserveAspectRatio="xMidYMid slice" focusable="false"
                            aria-label="Placeholder: 140x140" alt="JavaScript"/>
                        <h2>JavaScript</h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="jumbotron text-dark shadow-lg border-left rounded-0 border-primary bg-light">
                    <h1>Most Popular Project</h1><br/>
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
                        <a href="https://github.com/DeathThreats" type="button" className="btn btn-primary py-2 px-3"rel="noopener noreferrer"target="_blank">View all projects</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;