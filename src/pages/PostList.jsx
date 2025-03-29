import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function PostList() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch([], "https://jsonplaceholder.typicode.com/posts?_limit=10");
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>Hello Every Nyann~~</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <i className="text-red-700 my-6 text-2xl">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </i>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
