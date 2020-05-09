import React, {useState, useEffect} from 'react';
import './App.css';
import FirstPage from "./Pages/FirstPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  
  return (
    <div className="App">
    
    <Header />
   <FirstPage />
    <Footer />
    
    </div>
  );
}
export default App;

