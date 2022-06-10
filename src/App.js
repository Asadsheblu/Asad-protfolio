import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <div>
        <ScrollToTop smooth />
      <Home/>
    </div>
  );
}

export default App;
