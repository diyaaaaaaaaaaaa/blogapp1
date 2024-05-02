import React from 'react';
import sanitizeHtml from 'react-sanitize-html';

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const sanitizeContent = (content: string) => {
    return sanitizeHtml(content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['figure', 'figcaption']),
      allowedAttributes: {},
    });
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={post.urlToImage} alt={post.title} />
          <div dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
import Posts from '../components/Posts';

const PostsPage = () => {
  return <Posts />;
};

export default PostsPage;