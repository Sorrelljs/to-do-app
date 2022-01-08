import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import  NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import AllTaskList from './components/AllTaskList';


function App() {
  return (
    <Router>  
    <div className="App">
        <Navigation />
      <Routes>
          <Route exact path="/" element={<LandingPage />}/>  
          <Route path="*"element={<NotFound/>} />
          <Route path="/dashboard" element={<Dashboard title="My Tasks"/>}/>
          <Route path="/create" element={<Create title="Add Tasks"/>}/>
          <Route path ="/all" element={<AllTaskList/>}/>


    </Routes>
      </div>
  </Router>
  );
}

export default App;
