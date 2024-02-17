import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainPage from "./pages/main/MainPage";
import NotFound from "./pages/other/error/NotFound";

function App() {
  const token = useSelector((state) => state.token.value);
  
  return (
    <Routes>
      <Route path="/main"element={token ? <MainPage /> : <Navigate to="/login" replace />}/>
      <Route path="/" element={ token ? ( <Navigate to="/main" replace /> ) : ( <Navigate to="/login" replace /> ) }/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
