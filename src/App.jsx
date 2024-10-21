import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ChatWindow from './ChatWindow';
import Footer from './Footer';

const App = () => {
  return (
    <Router basename="/Chat-Application">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatWindow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
