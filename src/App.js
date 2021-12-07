import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
