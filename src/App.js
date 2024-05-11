import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';

import './App.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;