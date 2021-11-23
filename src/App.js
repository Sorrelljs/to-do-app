import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import  NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>  
    <div className="App">
        <Navigation />
      <Routes>
          <Route exact path="/" element={<LandingPage />}/>  
          <Route path="*"element={<NotFound/>} />
          <Route path="/dashboard" element={<Dashboard title="My Tasks"/>}/>

    </Routes>
      </div>
  </Router>
  );
}

export default App;
