import Img1 from '../../assets/348428189_988640645839983_6693744623780082422_n.jpg';
import './Sell.css';

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

                    <label htmlFor="tname">T-Shirt Name</label>
                    <label htmlFor="sdes">Short Description</label>
                    <label htmlFor="ides">Item Description</label>
                </div>
            </div>
        </>
    );
}