import type { Post } from '../utils/jsonplaceholder';
import styles from './styles.module.css';

export function PostComponent(post: Post): React.JSX.Element {
  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
