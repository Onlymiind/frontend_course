import { useEffect, useState } from 'preact/hooks';
import { getPostList, type Post } from '../utils/jsonplaceholder';
import { PostComponent } from '../components/Post';
import styles from './styles.module.css';

export function PostsPage(): React.JSX.Element {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    (async () => {
      const posts = await getPostList();
      setPosts(posts);
    })();
  }, []);

  return (
    <div className={styles.postList}>
      {posts.map((post) => {
        return (
          <PostComponent
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          ></PostComponent>
        );
      })}
    </div>
  );
}
