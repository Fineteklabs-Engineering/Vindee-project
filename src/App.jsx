import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import HighlightsPage from './Pages/HighlightsPage';
import StreamsPage from './Pages/StreamsPage';
import BookPage from './Pages/BookPage';
import SocialMedia from './components/Socialmedia';
import './index.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career-highlights" element={<HighlightsPage />} />
        <Route path="/streams" element={<StreamsPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
      <SocialMedia />
    </>
  );
};

export default App;