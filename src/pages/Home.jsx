import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
// import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { useSelector } from "react-redux";

function Home() {
  // const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const allPosts = useSelector((state) => state.post.posts);

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      const capitalizedName = user.name.toUpperCase();
      setName(capitalizedName);
      if (name) {
        const fullMessage = `Welcome ${name} You Can Read or Add Your Own Posts Now`;
        let index = 0;

        const interval = setInterval(() => {
          setWelcomeMessage(fullMessage.slice(0, index + 1));
          index += 1;
          if (index === fullMessage.length) {
            clearInterval(interval);
          }
        }, 100);

        return () => clearInterval(interval);
      }
    });
  }, [name]);

  // useEffect(() => {
  //   appwriteService.getPosts().then((posts) => { //[] it is not there beacuse we need query to paass here
  //     if (posts) {
  //       setPosts(posts.documents);
  //     }
  //   });
  // }, []);

  if (allPosts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full p-2">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read or create your own posts
                <h6>Logged in and not able to see posts? please reload app!</h6>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <p className="text-white flex items-center justify-center pb-10 font-semibold">
          {welcomeMessage.split(name).map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index !== welcomeMessage.split(name).length - 1 && (
                <span className="px-1 name">{name}</span>
              )}
            </React.Fragment>
          ))}
        </p>
        <div className="flex flex-wrap">
          {allPosts
            .filter((posts) => posts.status === "active")
            .map((posts) => (
              <div key={posts.$id} className="p-2 w-1/4">
                <PostCard {...posts} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
