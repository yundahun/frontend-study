import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/:category?' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
