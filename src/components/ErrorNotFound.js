import '../styles/ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorNotFound() {

  return (
        <div className="container container-body d-flex align-items-left flex-column">
            <div className="content">
                <h1 className="display-1">Oops!</h1> 
                <p>The Page you're looking for doesn't seem to exist <span className="expression">¯\_(ツ)_/¯</span></p>
                <h6>Status Code: <span className="stscod">404</span></h6>
                <Link to="/"><button type="button" className="btn btn-primary px-3">Return to HomePage</button></Link>
            </div>
        </div>
  );
}

export default ErrorNotFound;
