import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import Footer from './components/Footer';
import './styles/style.css';
import About from './components/About';
import Use from './components/Use';


const Markdown = React.lazy(() => import('./components/Markdown'));
//import Markdown from './components/Markdown';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<UserForm/>} />
        <Route path="/markdown" element={<Suspense fallback={<p>This is loading................</p>}><Markdown/></Suspense>} />
        <Route path="/about" element={<About/>} />
        <Route path="/use" element={<Use/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
