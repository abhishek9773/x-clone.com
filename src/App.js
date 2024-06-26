import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Authentication from "./Components/Authentication/Authentication";
import { useDispatch, userSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "./Store/Auth/Action";

function App() {
  const jwt = localStorage.getitem("jwt");
  const { auth } = userSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
      navigate("/");
    }
  }, [auth.jwt]);
  return (
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <HomePage /> : <Authentication />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
