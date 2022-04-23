import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
