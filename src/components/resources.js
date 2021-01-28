import { Link } from 'react-router-dom';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';
import img5 from '../assets/img5.svg';
import img6 from '../assets/img6.svg';
import img7 from '../assets/img7.svg';
import img8 from '../assets/img8.svg';
import img9 from '../assets/img9.svg';
import img10 from '../assets/img10.svg';
import img11 from '../assets/img11.svg';
import '../styles/extras/resources.css';

function Resources() {

  return (
    <div className="container">
        <div className="jumbotron">
            <h1 class="display-3">Hey There!</h1>
            <h6>This Page is published but not optimized, designed, formatted, and meant for you to visit. For better experience, please go back</h6>
            <hr/>
            <div className="buttons px-auto">
                <Link to="/"><button type="button" className="btn btn-primary px-3">Return to HomePage </button></Link>
            </div>
        </div>
        <div className="container">
            <h1 className="text-center">Web Design Resources</h1>
            <div className="row mx-auto d-flex align-items-center justify-content-center">
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img2} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Non deserunt esse exercitation id enim laborum quis do culpa laborum. </p>
                    </div>
                </div>
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img3} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Ullamco proident cupidatat adipisicing commodo est culpa cillum.</p>
                    </div>
                </div>
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img4} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Eiusmod non amet eu nisi labore magna nostrud aliquip.</p>
                    </div>
                </div>
            </div>
            <div className="container row mx-auto d-flex align-items-center justify-content-center">
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img5} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Non veniam reprehenderit qui cupidatat cupidatat dolore eu in veniam dolor proident.</p>
                    </div>
                </div>
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img6} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Consequat eu veniam elit sit do cupidatat laboris exercitation id cupidatat minim occaecat voluptate consequat.</p>
                    </div>
                </div>
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img7} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Amet officia laborum adipisicing cillum officia cillum dolor ad occaecat Lorem ea do cillum.</p>
                    </div>
                </div>
            </div>
            <div className="container row mx-auto d-flex align-items-center justify-content-center">
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img8} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Laboris dolore cupidatat magna do proident esse laboris magna sunt elit do enim.</p>
                    </div>
                </div>
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img9} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Anim laboris magna velit eiusmod nostrud.</p>
                    </div>
                </div>
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img10} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Esse duis tempor aliqua aliquip officia consectetur et.</p>
                    </div>
                </div>
            </div>
            <div className="container row mx-auto d-flex align-items-center justify-content-center">
                <div className="card cards mx-2 my-3">
                    <img className="card-img-top" src={img11} alt="resources"/>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Aute fugiat sit mollit labore dolore deserunt consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Resources;