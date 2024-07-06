import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faUniversity, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Post.css'; // Make sure to import your CSS file
import Img1 from '../../../assets/348428189_988640645839983_6693744623780082422_n.jpg';

export default function Post(){
    return(
        <>
            <div className="icon-buttons">
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
                <button>
                    <FontAwesomeIcon icon={faUniversity} />
                </button>
                <button>
                    Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button className="button-icon">
                Your Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            <div className="main-container">
                <div className="column column1">        
                    <div className="image-section">
                        <div className="image-content">
                            <div className="image-body1">
                                <img src = {Img1} width={"30%"}/>
                            </div>
                            <div className="image-body1">
                                <img src = {Img1} width={"30%"}/>
                            </div>
                            <div className="image-body1">
                                <img src = {Img1} width={"30%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column column2">
                    <div className="image-section">
                        <div className="image-content">
                            <div className="image-body2">
                                <img src = {Img1} width={"30%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column column3">
                    <div className="content-section">
                        <div className="card home-card">
                            <h2>UOC T Shirt-Plan Rs.2000</h2>
                            <div className="card-section-text">
                                <p className='para1'>T-shirt with Front Embriodery Line & University Logo</p>
                            </div>
                            <a href="./sell"><button>Sell</button></a>
                        </div>
                    </div>
                </div>
            </div> 

        </>
    );
}