import Navigation from './global/components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Sell from './pages/Sell/Sell';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Test from './pages/Test/Test';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='gradient-background'></div>
			<div className='white-overlay'></div>
      
      <header>
        <Navigation></Navigation>
      </header>
      <Routes>
					<Route path='UniWear/' element={<Home />} />
					<Route path='UniWear/discover' element={<Discover />} />
					<Route path='UniWear/sell' element={<Sell />} />
          <Route path='UniWear/about' element={<About />} />
					<Route path='UniWear/login' element={<Login />} />
					<Route path='UniWear/UniWear' element={<Test />} />
					<Route path='UniWear/*' element={<PageNotFound />} />
			</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
