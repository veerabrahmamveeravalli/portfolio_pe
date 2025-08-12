import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage'; // Importing the ContactPage component
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ContactPage /> 
    </div>
  );
}

export default App;