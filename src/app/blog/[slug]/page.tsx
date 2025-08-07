import Link from 'next/link';
import Widget from '@Components/Widget';
import Article from './components/BlogPost/Article';
import { posts } from './components/BlogPost/data';

import styles from './styles.module.css';


// This function can be used for Static Site Generation (SSG)
// It tells Next.js which slugs to pre-render at build time.
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const currentPost = posts.find((p) => p.slug === slug);

  if (!currentPost) {
    // You could redirect or show a 404 component here.
    return <div>Post not found</div>;
  }

  return (
    <section className={styles['blogPost']}>
      <div className={styles['container']}>
        <div className={styles['grid']}>

          {/* Main Content */}
          <div className={styles['main']}>
            <Article content={currentPost.content} />
            {/* <Comments /> */}
          </div>

          {/* Sidebar */}
          <div className={styles['sidebar']}>
            <Widget title="RELATED.POSTS">
              <div className={styles['relatedPostsList']}>
                {posts
                  .filter((p) => p.id !== currentPost.id)
                  .map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className={styles['relatedPostButton']}
                    >
                      <div className={styles['relatedPostTitle']}>{post.title}</div>
                      <div className={styles['relatedPostMeta']}>
                        {post.date} • {post.readTime}
                      </div>
                    </Link>
                  ))}
              </div>
            </Widget>

            <Widget title="SHARE.POST">
              <div className={styles['relatedPostsList']}>
                <button className={styles['shareButton']}>[COPY.URL]</button>
                <button className={styles['shareButton']}>[PRINT.POST]</button>
              </div>
            </Widget>
          </div>

        </div>
      </div>
    </section>
  );
}


export default BlogPostPage;
