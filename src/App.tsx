import { BrowserRouter as Router, Routes, Route/*, Link*/ } from 'react-router-dom';
import HomePage from './Home';
import Project1 from './ProjectPages/Project1';

function App() {
  return (
    <Router>
      <div>
        {/* Routes setup */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project1" element={<Project1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;