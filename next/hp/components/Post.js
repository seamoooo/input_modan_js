import Link from 'next/link';

const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {':'}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-bule-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
