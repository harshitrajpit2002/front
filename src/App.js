import "./App.css";
import Post from "./component/Post";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import IndexPage from "./component/pages/IndexPage";
import LoginPage from "./component/pages/LoginPage";
import RegisterPage from "./component/pages/RegisterPage";
import CreatePost from "./component/pages/CreatePost";
import { UserContextProvider } from "./component/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
