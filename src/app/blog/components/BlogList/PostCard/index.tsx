import Link from 'next/link';
import { BlogPost } from '../../../[slug]/components/BlogPost/data';
import styles from './styles.module.css';


interface PostCardProps {
  post: BlogPost;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article
        className={styles['postCard']}
      >
        <div className={styles['postCardHeader']}>
          <div className={styles['postCardMeta']}>
            <div className={styles['postCardCategory']}>{post.category}</div>
            <span className={styles['postCardDate']}>{post.date}</span>
          </div>
          <div className={styles['postCardStatusIndicator']}></div>
        </div>
        <div className={styles['postCardContent']}>
          <h2 className={styles['postCardTitle']}>{post.title}</h2>
          <p className={styles['postCardExcerpt']}>{post.excerpt}</p>
          <div className={styles['tags']}>
            {post.tags.map((tag: string) => (
              <span key={tag} className={styles['tag']}>
                #{tag}
              </span>
            ))}
          </div>
          <div className={styles['postCardReadMore']}>{'>'} EXECUTE_READ_MORE</div>
        </div>
      </article>
    </Link>
  );
}


export default PostCard;
