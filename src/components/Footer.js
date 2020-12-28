import '../styles/App.css';
import { Link } from 'react-router-dom';

function Footer() {

    const NoDecoration = {
        textDecoration:'none'
    };


  return (
    <footer className="pt-5 pb-4">
      <div className="row container mx-auto">
          <div className="col-md-4 d-flex flex-column justify-content-start align-items-left">
              <ul className="list-unstyled text-left text-white">
                <li><h3 className="pb-2">Navigate</h3></li>
                <li className="footerLinks"><Link to="/"style={NoDecoration}>Home</Link></li>
                <li className="footerLinks"><Link to="/software"style={NoDecoration}>Software</Link></li>
                <li className="footerLinks"><Link to="/contact"style={NoDecoration}>Contact</Link></li>
              </ul>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-start align-items-left">
              <ul className="list-unstyled text-left text-white">
                  <li><h3 className="pb-2">More</h3></li>
                    <li className="footerLinks"><a style={NoDecoration} href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J37ZD2JX7JXLQ&source=url"rel="noopener noreferrer"target="_blank">Donate</a></li>
                    <li className="footerLinks"><Link to="/resources"style={NoDecoration}>Resources</Link></li>
              </ul>
          </div>
          <div className="links col-md-4 d-flex flex-column justify-content-start align-items-left">
              <ul className="list-unstyled text-left text-white">
                  <li><h3 className="mb-2">Stay in the Loop</h3></li>
                    <a className="icon fab fa-facebook-square" content="Facebook" href="https://facebook.com/augustin.nalzaro">{null}</a> 
                    <a className="icon fab fa-facebook-messenger" content="Facebook" href="https://m.me/augustin.nalzaro">{null}</a>
                    <a className="icon fa fa-github" href="https://github.com/DeathThreats">{null}</a> 
                    <a className="icon fa fa-stack-overflow" href="https://stackoverflow.com">{null}</a> 
                    <Link className="icon fas fa-envelope" to="/contact">{null}</Link>
              </ul>
          </div>
      </div>
      <div className="end container">
      <hr className="mt-3"style={{color: '#cccccc', backgroundColor: '#cccccc', height: .4}}/>
          <div className="container d-lg-flex justify-content-between text-light">
              <p className="text-left text-white">Developed / Hard Coded by - Augustin Nalzaro -</p>
              <p className="text-left text-white mr-1">Made with <span className="text-danger">&hearts;</span> from The Philippines </p>
          </div>
      </div>
  </footer>
  );
}

export default Footer;