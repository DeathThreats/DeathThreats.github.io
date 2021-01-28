import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { gsap } from "gsap";

function Nav() {

  window.addEventListener("scroll", function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 0);
  })

  useEffect(() => {
    gsap.from(".navbar-container", 1, {
        ease: "power3.out",
        x:100,
        opacity:0
    });
}, [])

  return (
  <nav className="navbar fixed-top navbar-expand-lg p-0">
    <div className="container navbar-container">
      <div className="container-md">
        <Link to="/" className="navbar-title" data-toggle="tooltip" data-placement="bottom" title="Home">Augustin Nalzaro</Link> 
        <button className="navbar-toggler navbar-btn" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav navbar-items-holder">
            <li className="nav-item px-md-2" data-toggle="tooltip" data-placement="bottom" title="Software"><Link to="/software" className="navbar-item">Software</Link></li>
            <li className="nav-item px-md-2" data-toggle="tooltip" data-placement="bottom" title="Contact"><Link to="/contact" className="navbar-item">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Nav;