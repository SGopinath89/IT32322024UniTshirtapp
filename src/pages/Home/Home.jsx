import Spline from '@splinetool/react-spline';
import './Home.css'; // Make sure to import your CSS file

export default function Home() {
  return (
    <>  
      <div className='spline-container-2'>
      <Spline scene="https://prod.spline.design/1Gs6vLQ27u-NE1D4/scene.splinecode" />
        <div className='spline-container'>
        <Spline scene="https://prod.spline.design/FfOncrmh8Kr72F6J/scene.splinecode" />
        </div>
      </div>
      <h1>Home</h1>
    </>
  );
}
