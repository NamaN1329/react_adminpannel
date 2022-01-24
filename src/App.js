import Login from './components/auth/Login';
import { render } from "react-dom";
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/home/Dashboard';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
