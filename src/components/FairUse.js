import { Link } from 'react-router-dom';

function FairUse() {
  return (
      <div>
          <div className="container notice">
              <div className="jumbotron">
                <h1>Fair Use Notice</h1>
                <small className="text-muted">Last updated: January 18, 2021</small>
                <hr/>
                <p>This site and the content made available through this site are for educational and informational purposes only.</p>
                <p>The site may contain copyrighted material owned by a third party, the use of which has not been specifically authorized by the copyright owner. Notwithstanding a copyright owner's right under the Copyright Act, Section 107 of the Copyright Act allows limited use of copyrighted material without requiring permission from the rights holder, for purposes such as education, criticism, comment, news reporting, teaching, scholarship, and research. These so-called "fair-uses" are permitted even if the use of the work would otherwise be infringing.</p>
                <p>If you wish to use copyrighted material published on this site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner, I recommend that you seek the advice of legal counsel if you have any questions on this point.</p>
                <p>if you believe that any content or postings on this site violate your intellectual property or other rights, please <Link to="/contact" data-toggle="tooltip" data-placement="bottom" title="contact me">contact me</Link></p>
              </div>
          </div>
      </div>
  );
}

export default FairUse;