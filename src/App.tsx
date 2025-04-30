import { MainPage } from './pages/MainPage/MainPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer';
import { Learning } from './pages/Learning/Learning';
import {StudentsLife} from './pages/StudentsLife/StudentsLife'
import { Science } from './pages/Science/Science';
import { Application } from './pages/Applicants/Applicants';
import { StudentsPage } from './pages/StudentsPage/StudentsPage';
import { Cooperation } from './pages/Cooperation/Cooperation';
import { Library } from './pages/Library/Library';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { News } from './pages/News/News';

export function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/learning' element={<Learning />}/>
          <Route path='/studentsLife' element={<StudentsLife />}/>
          <Route path='/Science' element={<Science />}/>
          <Route path='/applicants' element={<Application />}/>
          <Route path='/studentsPage' element={<StudentsPage />}/>
          <Route path='/cooperation' element={<Cooperation />}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/news' element={<News />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
