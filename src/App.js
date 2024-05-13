import { React } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import BlogPage from './components/BlogPage/BlogPage';
import BlogDetail from './components/BlogDetail/BlogDetail';
import PracticeAreaPage from './components/PracticeAreaPage/PracticeAreaPage';
import PracticeAreaDetail from './components/PracticeAreaSingle/PracticeAreaSingle';
import CasesPage from './components/CasesPage/CasesPage';
import CaseSinglePage from './components/CasesSinglePage/CasesSinglePage';
import PricingPage from './components/PricingPage/PricingPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';
import Licenses from './components/Licenses/Licenses';
import Changelog from './components/Changelog/Changelog';
import PasswordProtection from './components/PasswordProtection/PasswordProtection';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
        <Route path='/practiceareapage' element={<PracticeAreaPage />} />
        <Route path='/practiceareasingle' element={<PracticeAreaDetail />} />
        <Route path='/cases' element={<CasesPage />} />
        <Route path='/casesInner' element={<CaseSinglePage />} />        
        <Route path='/packages' element={<PricingPage />} />
        <Route path='/testimonials' element={<TestimonialsPage />} />
        <Route path='/lisences' element={<Licenses />} />
        <Route path='/changelog' element={<Changelog />} />
        <Route path='/password_protection' element={<PasswordProtection />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;