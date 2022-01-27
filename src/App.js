import Login from './components/auth/Login';
import { render } from "react-dom";
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/home/Dashboard';
import 'font-awesome/css/font-awesome.min.css';
import User from './components/users/User';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<User />} />
    </Routes>
    </div>
  );
}

export default App;
