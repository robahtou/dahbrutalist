'use client';

import styles from './styles.module.css';
import Button from '@Components/Button';


interface CommentsProps {}

function Comments({}: CommentsProps) {
  return (
    <div className={styles['comments']}>
      <div className={styles['commentsWidget']}>
        <h3 className={styles['sidebarTitle']}>SYSTEM.FEEDBACK</h3>
        <div className={styles['comment']}>
          <div className={styles['commentHeader']}>
            <span className={styles['commentAuthor']}>USER.001</span>
            <span className={styles['commentDate']}>16/01/24 09:42</span>
          </div>
          <p className={styles['commentBody']}>
            EXCELLENT.POST - FINALLY SOMEONE WHO UNDERSTANDS THE IMPORTANCE OF FUNCTIONAL DESIGN
          </p>
        </div>

        <div className={styles['comment']}>
          <div className={styles['commentHeader']}>
            <span className={styles['commentAuthor']}>DESIGNER.REBEL</span>
            <span className={styles['commentDate']}>16/01/24 11:15</span>
          </div>
          <p className={styles['commentBody']}>
            THIS IS THE FUTURE. NO MORE ROUNDED CORNERS. NO MORE GRADIENTS. ONLY TRUTH.
          </p>
        </div>

        <div className={styles['addComment']}>
          <h4 className={styles['addCommentTitle']}>ADD.FEEDBACK</h4>
          <textarea
            className={styles['textarea']}
            rows={4}
            placeholder="ENTER.YOUR.THOUGHTS..."
          />
          <Button onClick={() => {}} className={styles['submitButton']}>[SUBMIT.FEEDBACK]</Button>
        </div>
      </div>
    </div>
  );
}


export default Comments;
