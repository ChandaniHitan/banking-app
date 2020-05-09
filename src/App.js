import React, {useState, useEffect} from 'react';
import './App.css';
import FirstPage from "./Pages/FirstPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountPage from "./Pages/AccountPage";

function App() {

  const [userloggedin, setUserloggedin] = useState("loggedin");

  return (
    <div className="App">
    
    <Header />
    {userloggedin === "loggedin" ?
    <AccountPage />:
    <FirstPage />
    }
    <Footer /> 
    
    
    </div>
  );
}
export default App;

