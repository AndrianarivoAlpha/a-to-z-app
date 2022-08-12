import '../../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
// import Signup from '../Signup';
import Landing from '../Landing';
import Login from '../Login';
import Welcome from '../Welcome';
import Header from '../Header';
import Footer from '../Footer';
import { UserAuthContextProvider } from '../Firebase/userAuthContext';
import SignUp from '../Signup/SignUp';

function App() {
  return (
    <Router>
      <Header />
      
      <UserAuthContextProvider>
        <Routes>
              <Route exact path="/" element={<Landing/>} />
              <Route path="/welcome" element={<Welcome/>} />
              <Route path="/login" element={<Login/>} />
              {/* Diso // <Route path="/signup" element={<Signup/>} /> */}
              <Route path="/signup" element={<SignUp/>} />
              <Route path="*" element={<ErrorPage/>} />
          </Routes>
      </UserAuthContextProvider>
        
        <Footer />
    </Router>
  );
}

export default App;