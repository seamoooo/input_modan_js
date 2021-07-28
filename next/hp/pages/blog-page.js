// ビルドをするタイミングでサーバーサイドで、
// apiを叩いて、pre-fetchする getStaticProps()でビルド時に自動呼び出し
// getStaticPropsはpages内のみで使用可能
// npm run devではリクエスト毎、npm startではビルド時に実行される

import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostaData } from '../lib/posts';

const Blog = ({ posts }) => {
  return (
    <Layout title="blog">
      <ul className="m-10">
        {/* postsが存在する場合はmap関数を実行して、Postを呼び出し */}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

// ビルドをするタイミングでサーバーサイドで、一度だけ実行される
export async function getStaticProps() {
  const posts = await getAllPostaData();

  // propsでblogに渡していく
  return {
    props: { posts },
  };
}
