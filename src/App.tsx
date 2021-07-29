import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
    return (
        <DataProvider>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </DataProvider>
    );
}

export default App;
