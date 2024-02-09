import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainPage from "./pages/main/MainPage";
import { setToken } from "./redux/slices/tokenSlice";

function App() {
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const saveToken = (token) => {
    console.log("Token saved:", token);
    dispatch(setToken(token));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            <Navigate to="/main" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<Login saveToken={saveToken} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={token ? <MainPage /> : <Navigate to="/login" replace />}/>
    </Routes>
  );
}

export default App;
