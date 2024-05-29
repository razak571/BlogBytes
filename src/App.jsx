import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { addpost } from "./store/postSlice";
import appwriteService from "./appwrite/config";

function App() {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  (async () => {
    const posts = await appwriteService.getPosts([]);

    if (posts) {
      setAllPosts(posts.documents);
    }
  })();
  dispatch(addpost(allPosts));

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between  ">
      <div className="w-full block">
        <Header />
        <main className="bg-gray-700 mt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
