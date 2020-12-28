import '../styles/App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const NoDecoration = {
    textDecoration:'none'
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light border-bottom shadow-sm d-flex align-items-center justify-content-center py-2">
      <div className="container subNavBrand">
        <Link to="/" style={NoDecoration}>
          <div className="navbar-brand"  data-toggle="tooltip" data-placement="bottom"title="Home">Augustin Nalzaro</div> 
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse subNavItems" id="navbarText">
          <ul className="navbar-nav">
            <Link to="/software" style={NoDecoration}>
              <li className="nav-item px-md-2" data-toggle="tooltip" data-placement="bottom" title="Software | API"><div className="nav-link">Software</div></li>
            </Link>
            <Link to="/contact" style={NoDecoration}>
              <li className="nav-item px-md-2" data-toggle="tooltip" data-placement="bottom" title="Contact"> <div className="nav-link">Contact</div> </li>
            </Link>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;
