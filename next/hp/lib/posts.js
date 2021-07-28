// apiにfetchする処理
import fetch from 'node-fetch';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostaData() {
  // 同期化して、取得
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  // map関数をしようして、id一覧を作成する
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}`));
  const post = await res.json();

  return post;
}
