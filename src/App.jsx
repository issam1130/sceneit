import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound"; 
import About from "./components/About";
import MovieRecommendation from "./components/MovieRecommendation";
import BoredPage from "./components/BoredPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/about" element={<About/>}/>
        <Route path="recommend" element={<MovieRecommendation/>}/>
        <Route path="/bored" element={<BoredPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
