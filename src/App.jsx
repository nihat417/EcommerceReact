import { useSelector, useDispatch } from "react-redux";
import { setToken, clearToken } from "./redux/slices/tokenSlice";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainPage from "./pages/main/MainPage";

function App() {
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const saveToken = () => {
    dispatch(setToken(token));
  };

  const logOut = () => {
    dispatch(clearToken());
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />

        {token && <Navigate to="/main" replace />}

        <Route path="/login" element={<Login saveToken={saveToken} />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/main"
          element={
            token ? (
              <MainPage logout={logout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
