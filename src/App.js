import './App.css';
import "../src/public/css/custom.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './layout/mainLayout';
import Calculator from './component/calculator';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Calculator/>} />
            <Route path="*" element={<div>404 Not Found!</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
