import { Fragment, React } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './Views/LandingPage/LandingPage';
import AboutPage from './Views/AboutPage/AboutPage';
import ContactPage from './Views/ContactPage/ContactPage';
import BlogPage from './Views/BlogPage/BlogPage';
import BlogDetail from './Views/BlogDetail/BlogDetail';
import PracticeAreaPage from './Views/PracticeAreaPage/PracticeAreaPage';
import PracticeAreaDetail from './Views/PracticeAreaSingle/PracticeAreaSingle';
import CasesPage from './Views/CasesPage/CasesPage';
import CaseSinglePage from './Views/CasesSinglePage/CasesSinglePage';
import PricingPage from './Views/PricingPage/PricingPage';
import TestimonialsPage from './Views/TestimonialsPage/TestimonialsPage';
import Licenses from './Views/Licenses/Licenses';
import Changelog from './Views/Changelog/Changelog';
import PasswordProtection from './Views/PasswordProtection/PasswordProtection';
import ErrorPage from './Views/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default App;