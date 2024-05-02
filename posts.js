import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {}

export default function PostsPage(_: PostsPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}