import '../styles/ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorNotFound() {

return (
  <div className="container error-body">
      <div className="error">
          <p className="display-1 font-weight-bold">Oops!</p> 
          <h4>The Page you're looking for doesn't seem to exist <span className="expression">¯\_(ツ)_/¯</span></h4>
          <p>Status Code: <span className="stscod">404</span></p>
          <Link to="/"><button type="button" className="btn btn-primary px-3">Return to HomePage</button></Link>
      </div>
  </div>
);
}

export default ErrorNotFound;
