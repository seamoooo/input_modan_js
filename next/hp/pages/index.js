import Layout from '../components/Layout';

export default function Home() {
  return (
    // Layout以下がchildrenになる
    <Layout title="Home">
      <p className="text-4xl">Hello Next.js!!</p>
    </Layout>
  );
}
