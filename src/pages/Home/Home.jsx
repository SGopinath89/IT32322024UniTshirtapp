import Spline from '@splinetool/react-spline';
import './Home.css'; // Make sure to import your CSS file
import '../../index.css';
import Img1 from '../../assets/react.svg';

export default function Home() {
  return (
    <>
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/1Gs6vLQ27u-NE1D4/scene.splinecode" />
      </div>
      <div className="content">
        <div className='content-row'>
          <div className='text-container'>
            <h1>Redefining Campus Fashion</h1>
            <p>Your stylish hub for comfy university-themed T-shirts. Unleash your university spirit with each thread. Make a statement. Make it yours. Fashion meets campus pride.</p>
            <button>Discover</button>
          </div>
          <div className='spline-container'>
          <Spline scene="https://prod.spline.design/CKRSaAhKKxpINP-U/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="card">
          <h1>Start Here Become a Seller</h1>
          <div className="card-section-text">
            <p>Start selling your designs on UniWear. Our new experience makes it super simple. Upload your original designs and watch the cash flow!</p>
          </div>
          <button>Sell</button>
        </div>
      </div>
      <div className="image-section">
        <div className="image-content">
          <div className="image-content-text">
            <h1>Setting the Standard for Unmatched Quality</h1>
            <p>UniWear is not just about T-shirts; it's about forging a partnership with brands that value quality, uniqueness, and distinction. Let UniWear be the canvas for your brand's story, where every thread speaks volumes about your commitment to excellence.
              Choose UniWear - where unmatched quality meets your brand's aspirations. Elevate your identity with T-shirts that reflect the true essence of your university.</p>
          </div>
          <div className="image-body">
            <img src = {Img1}></img>
          </div>
        </div>
      </div>
    </>
  );
}
