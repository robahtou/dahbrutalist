import PostCard from '../PostCard';
import styles from './styles.module.css';
import { BlogPost } from '../../../[slug]/components/BlogPost/data';


interface PostListProps {
  posts: BlogPost[];
}

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles['postsList']}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}


export default PostList;
