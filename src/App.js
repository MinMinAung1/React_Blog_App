import AllBlogPosts from "./pages/AllBlogPosts";
import FavoriteBlogPosts from "./pages/FavoriteBlogPosts";
import NewBlogPost from "./pages/NewBlogPost";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element={<AllBlogPosts />} />
      <Route path="/new" element={<NewBlogPost />} />
      <Route path="/favorite" element={<FavoriteBlogPosts />} />
    </Routes>
    </Layout>
  );
}

export default App;
