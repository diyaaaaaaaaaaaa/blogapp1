import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PostProps {
  post: {
    slug: string;
    title: string;
    description: string;
    urlToImage: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <p>{post.description}</p>
      <Image
        src={post.urlToImage}
        alt={post.title}
        width={1200}
        height={638}
      />
    </div>
  );
};

export default Post;