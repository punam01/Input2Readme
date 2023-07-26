import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import './styles/style.css';
import Markdown from './components/Markdown';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<UserForm/>} />
        <Route path="/markdown" element={<Markdown/>} />
        {/* Add more routes for your other components */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
