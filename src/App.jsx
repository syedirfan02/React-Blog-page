import React, { useState } from "react";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg justify-content-center navbar-light bg-slate-700 text-center py-4">
          {!isAuth ? (
            <Link to="/login" className="nav-link text-white mx-3">
              Login
            </Link>
          ) : (
            <>
              <Link to="/" className="nav-link text-white mx-3">
                Home
              </Link>
              <Link to="/createpost" className="nav-link text-white mx-3">
                Create Post
              </Link>
              <button
                className="text-white bg-[#11d7a9] hover:bg-[#000] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={signUserOut}
              >
                {" "}
                Logout
              </button>
            </>
          )}
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route
              path="/login"
              element={<Login setIsAuth={setIsAuth} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
