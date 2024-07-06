import Img1 from '../../assets/348428189_988640645839983_6693744623780082422_n.jpg';
import './Sell.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export default function Sell(){
    return(
        <>
            <div className='txtmargin'>
                <center>
                    <h2>UniWear Best Sellers</h2>
                </center>
            </div>
            <div className='img-div'>
                <img src = {Img1} className='imgBestSeller'/>
                <img src = {Img1} className='imgBestSeller'/>
                <img src = {Img1} className='imgBestSeller'/>
                <img src = {Img1} className='imgBestSeller'/>
                <img src = {Img1} className='imgBestSeller'/>
            </div>
            <div className='addItem-div'>
                <div className='card addItem-card'>
                    <h3>Add Your Item</h3>

                    <form className='form-addItem'>
                        <div className="name-fields">
                            <div className="first-name">
                                <label htmlFor="tname" className='txtlabel'>T-Shirt Name </label> 
                                <input type="text" className='tname-form-control' />
                            </div>
                            <div className="last-name">
                            <    label htmlFor="sdes" className='txtlabel'>Short Description</label> 
                                <input type="text" className='sdes-form-control' />
                            </div>
                        </div>
                        
                        <label htmlFor="ides" className='txtlabel'>Item Description</label> 
                        <textarea name="txtdes" id="txtdes" cols="30" rows="10"></textarea>

                        <label htmlFor="ides" className='txtlabel'>Add Features</label>
                        <div className='addremove-div'>
                            <div className="features-fields">
                                <div className="first-feature">
                                    <label htmlFor="tname" className='txtlabel'>Colar </label> 
                                    <input type="text" className='tname-form-control' />
                                    <label htmlFor="tname" className='txtlabel'>Cuff </label> 
                                    <input type="text" className='tname-form-control' />
                                    <label htmlFor="tname" className='txtlabel'>Placket </label> 
                                    <input type="text" className='tname-form-control' />
                                </div>
                                <div className="last-feature">
                                    <label htmlFor="sdes" className='txtlabel'>P length</label> 
                                    <input type="text" className='sdes-form-control' />
                                    <label htmlFor="sdes" className='txtlabel'>Material</label> 
                                    <input type="text" className='sdes-form-control' />
                                    <label htmlFor="sdes" className='txtlabel'>Manufacturer</label> 
                                    <input type="text" className='sdes-form-control' />
                                </div>
                            </div>
                        </div>

                        <label htmlFor="ides" className='txtlabel'>Add on Images</label> <br />
                        <div className='img-add-div'>
                            <div className="first-img"></div>
                            <div className="second-img"></div>
                            <div className="third-img"></div>
                            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </>
    );
}