import React, { useState } from 'react';
import Img1 from '../../assets/348428189_988640645839983_6693744623780082422_n.jpg';
import './Sell.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export default function Sell() {
    const [images, setImages] = useState([null, null, null]);

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = reader.result;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className='txtmargin'>
                <center>
                    <h2>UniWear Best Sellers</h2>
                </center>
            </div>
            <div className='img-div'>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
            </div>
            <div className='addItem-div'>
                <div className='card addItem-card'>
                    <h2>Add Your Item</h2>
                    <form className='form-addItem'>
                        <div className="name-fields">
                            <div className="first-name">
                                <label htmlFor="tname" className='txtlabel'>T-Shirt Name </label> 
                                <input type="text" className='tname-form-control' />
                            </div>
                            <div className="last-name">
                                <label htmlFor="sdes" className='txtlabel'>Short Description</label> 
                                <input type="text" className='sdes-form-control' />
                            </div>
                        </div>
                        <label htmlFor="ides" className='txtlabel'>Item Description</label> 
                        <textarea name="txtdes" id="txtdes" cols="30" rows="10"></textarea>
                        <label htmlFor="sdes" className='txtlabel'>Price</label> 
                        <input type="text" className='sdes-form-control' />
                        <label htmlFor="ides" className='txtlabel'>Add Features</label>
                        <div className='addremove-div'>
                            <div className="features-fields">
                                <div className="first-feature">
                                    <label htmlFor="colar" className='txtlabel'>Colar</label> 
                                    <input type="text" className='tname-form-control' />
                                    <label htmlFor="cuff" className='txtlabel'>Cuff</label> 
                                    <input type="text" className='tname-form-control' />
                                    <label htmlFor="placket" className='txtlabel'>Placket</label> 
                                    <input type="text" className='tname-form-control' />
                                </div>
                                <div className="last-feature">
                                    <label htmlFor="plength" className='txtlabel'>P length</label> 
                                    <input type="text" className='sdes-form-control' />
                                    <label htmlFor="material" className='txtlabel'>Material</label> 
                                    <input type="text" className='sdes-form-control' />
                                    <label htmlFor="manufacturer" className='txtlabel'>Manufacturer</label> 
                                    <input type="text" className='sdes-form-control' />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="ides" className='txtlabel'>Add on Images</label><br />
                        <div className='img-add-div'>
                            {['first-img', 'second-img', 'third-img'].map((className, index) => (
                                <div className={className} key={index}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id={`file-input-${index}`}
                                        onChange={(e) => handleImageChange(e, index)}
                                    />
                                    {images[index] ? (
                                        <img src={images[index]} alt="Selected" className="selected-image" />
                                    ) : (
                                        <label htmlFor={`file-input-${index}`}>
                                            <FontAwesomeIcon icon={faImage} />
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='btn-div'>
                            <button type="submit">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
