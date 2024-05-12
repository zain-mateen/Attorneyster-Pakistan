import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import BlogPage from './components/BlogPage/BlogPage';
import BlogDetail from './components/BlogDetail/BlogDetail';
import PracticeAreaPage from './components/PracticeAreaPage/PracticeAreaPage';
import PracticeAreaDetail from './components/PracticeAreaSingle/PracticeAreaSingle';
import Footer from './components/Footer/Footer';

import './App.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/auth' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
        <Route path='/practiceareapage' element={<PracticeAreaPage />} />
        <Route path='/practiceareasingle' element={<PracticeAreaDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;