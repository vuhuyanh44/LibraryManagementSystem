import './App.css';
import Specialist from './displays/specialist/specialist';
import Admin from './displays/admin/admin'
import SignIn from './displays/signIn/signIn';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";
import { useContext,useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { UpdateSuccess } from './context/AuthActions';
function App() {
  const { user,dispatch } = useContext(AuthContext); 
  console.log(user ? user.role_id: null);
  const app = (user) =>{
    if (!user){
      return(
    <Router>
    <Routes>
    <Route path = "/" element = { <SignIn />} />
    
    </Routes>
    </Router>)
      
    }
    if (user.role_id === 3 ){
      return <Specialist/>
    }
    if (user.role_id === 2 ){
      return <Admin/>
    }
    else{
      return(
        <Router>
        <Routes>
        <Route path = "/" element = { <SignIn />} />
        
        </Routes>
        </Router>)
    }

  }
  return (
    app(user)
  );
 
}

export default App;
