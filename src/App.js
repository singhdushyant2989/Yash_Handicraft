import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import HomePage from './component/Pages/HomePage';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
