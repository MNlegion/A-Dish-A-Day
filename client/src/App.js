import './App.css';
import { UserProvider } from './utils/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import NoMatch from '../src/pages/NoMatch';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing className="landing-page" />}
          />
          <Route 
            path="/login"
            element={<SignIn />}
          />
          <Route 
            path="signup"
            element={<SignUp />}
          />
          <Route 
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
