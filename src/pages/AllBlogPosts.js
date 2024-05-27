import PostList from "../components/blog/PostList";
import { useState,useEffect } from "react";

//   const DUMMY_POST = [
//     {
//       id:1,
//       title:'Beauty Dubai',
//       body:'I visisted Dubai yesterday. I am so happy for that.',
//       author:'Merry',
//       image:'https://miro.medium.com/v2/resize:fit:1400/1*mWltjc4a0IOtrYjEg6ZD_g.jpeg'
//  },
//     {
//       id:2,
//       title:'Cheesy Bite Burger',
//       body:'Hay dude, try this burger! It is really chessy and delicious.',
//       author:'Join Smith',
//      image:'https://i.redd.it/qo7rihor67i31.jpg'
//     },
//   ]

function AllBlogPosts() {
   const [posts,setPosts] = useState([])
   const [isloading,setIsLoading] = useState(true)
 
   useEffect(() =>{
    fetch('https://testing-app-7b5f4-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json')
   .then((response) => {
    if(response.status === 200){
      return response.json()
    }else{
      console.log('can not fetch data form server.')
    }
   }).then((data) => {
      const postList = [];

      for (const key in data) {
       const post = {
        id : key,
        ...data[key]
       } 

       postList.push(post)
      }

      setPosts(postList)
      setIsLoading(false)
   })
   },[])

   let content = ''

   if(isloading){
    content = <p>Posts are Loading...</p>
   }else{
    content = <PostList posts={posts}/>
   }

  return (
    <section>
      <h1>All Blog Posts</h1>
      {/* <PostList posts={DUMMY_POST} /> */}
      {content}
    </section>
  );
}

export default AllBlogPosts;
