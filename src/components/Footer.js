import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="pt-5 pb-4">
        <div className="row container mx-auto text-left text-white footer">
          <div className="col-md-4 d-flex flex-column justify-content-start align-items-left">
              <ul className="list-unstyled footer-links-holder">
                <li><h3>Navigate</h3></li>
                <li><Link className="footer-links" to="/">Home</Link></li>
                <li><Link className="footer-links" to="/software">Software</Link></li>
                <li><Link className="footer-links" to="/contact">Contact</Link></li>
              </ul>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-start align-items-left">
              <ul className="list-unstyled footer-links-holder">
                <li><h3>More</h3></li>
                <li><a className="footer-links" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J37ZD2JX7JXLQ&source=url"rel="noopener noreferrer"target="_blank">Donate</a></li>
                <li><Link className="footer-links" to="/fair-use-notice">Fair Use Notice</Link></li>
              </ul>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-start align-items-left">
              <ul className="list-unstyled footer-links-holder">
                <li><h3>Get in Touch</h3></li>
                <a className="icon fab fa-facebook-square" content="Facebook" href="https://facebook.com/augustin.nalzaro">{null}</a> 
                <a className="icon fab fa-facebook-messenger" content="Facebook" href="https://m.me/augustin.nalzaro">{null}</a>
                <a className="icon fa fa-github" href="https://github.com/DeathThreats">{null}</a> 
                <a className="icon fa fa-stack-overflow" href="https://stackoverflow.com/users/14922455/augustin">{null}</a> 
                <Link className="icon fas fa-envelope" to="/contact">{null}</Link>
              </ul>
          </div>
        </div>
        <div className="container end-note">
            <hr className="mt-3"style={{color: '#cccccc', backgroundColor: '#646464', height: .4}}/>
            <div className="d-lg-flex justify-content-between text-light">
                <p className="text-left"> &copy; 2021 Augustin Nalzaro - All rights reserved</p>
                <p className="text-left mr-1">Made with <span className="text-danger">&hearts;</span> from The Philippines </p>
            </div>
        </div>
  </footer>
  );
}

export default Footer;