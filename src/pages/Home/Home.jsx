import Spline from '@splinetool/react-spline';
import './Home.css'; // Make sure to import your CSS file
import '../../index.css';

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
          </div>
          <div className='spline-container'>
          <Spline scene="https://prod.spline.design/FfOncrmh8Kr72F6J/scene.splinecode" />
          </div>
        </div>
      </div>
    </>
  );
}
