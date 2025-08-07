import Widget from '@Components/Widget';
import PostList from './components/BlogList/PostList';
import { posts } from './[slug]/components/BlogPost/data';

import styles from './styles.module.css';


function BlogPage() {
  const postCount = posts.length;

  return (
    <section className={styles['blog']}>
      <div className={styles['container']}>
        <div className={styles['grid']}>

          {/* Main Content */}
          <div className={styles['main']}>
            <div className={styles['posts']}>
              <PostList posts={posts} />
            </div>
          </div>

          {/* Sidebar */}
          <div className={styles['sidebar']}>
            <Widget title="SYSTEM.INFO">
              <div>UPTIME: 99.9%</div>
              <div>POSTS: {postCount}</div>
              <div>VIEWS: 1,337</div>
              <div>STATUS: OPERATIONAL</div>
            </Widget>

            <Widget title="RECENT.ACTIVITY">
              <div>15:42 - POST_PUBLISHED</div>
              <div>14:23 - SYSTEM_UPDATE</div>
              <div>13:15 - CACHE_CLEARED</div>
              <div>12:01 - BACKUP_COMPLETE</div>
            </Widget>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
