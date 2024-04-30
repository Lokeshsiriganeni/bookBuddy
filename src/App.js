import{ createContext, useContext, useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
// import BookHubThemeContext from './context/BookHubThemeContext'


const UserContext = createContext()
function App() {
  const [theme,setTheme] = useState(false)
  const toggleTheme = ()=>{
    setTheme((prev)=>!prev)
  }
  return (
    <UserContext.Provider value = {{theme,toggleTheme}}>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route
            path="/home"
            element={<ProtectedRoute>
              <HomePage />
            </ProtectedRoute>} />
          <Route
            path="/profile"
            element={<ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>} />
        </Routes>
      </Router>
    </UserContext.Provider>

  );
}


export default App;
export { UserContext };

