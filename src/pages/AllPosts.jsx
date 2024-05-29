import React, { useState } from "react";
// import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
// import { useDispatch } from "react-redux";
// import { addpost } from "../store/postSlice";
import { useSelector } from "react-redux";

function AllPosts() {
  // const [allPosts, setAllPosts] = useState([]);
  // const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.post.posts);

  // (async () => {
  //   const posts = await appwriteService.getPosts([]);

  //   if (posts) {
  //     setAllPosts(posts.documents);
  //   }
  // })();
  // dispatch(addpost(allPosts));
  // console.log('posts state', allPosts)

  // appwriteService.getPosts([]).then((posts) => { // [] indicates no query passing
  //   if (posts) {
  //     setPosts(posts.documents);
  //     // console.log('posts::', posts) //{}
  //     // console.log('A posts::', aposts)//[]
  //   }
  //   dispatch(addpost(aposts))
  // });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {allPosts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
