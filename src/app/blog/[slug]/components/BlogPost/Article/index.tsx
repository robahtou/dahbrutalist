'use client';

import styles from './styles.module.css';


interface ArticleProps {
  content: string;
}

function Article({ content }: ArticleProps) {
  return (
    <article className={styles['article']}>
      <div className={styles['articleContent']}>
        <div className={styles['prose']}>
          {content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={index} className={styles['postTitle']}>
                  {line.replace("# ", "")}
                </h1>
              )
            }
            if (line.startsWith("## ")) {
              return <h2 key={index}>{line.replace("## ", "")}</h2>
            }
            if (line.startsWith("### ")) {
              return <h3 key={index}>{line.replace("### ", "")}</h3>
            }
            if (line.startsWith("```")) {
              return null // Skip code block markers for now
            }
            if (line.trim() === "") {
              return <br key={index} />
            }
            if (line.startsWith("- ")) {
              return (
                <li key={index} className={styles['proseLi']}>
                  {line.replace("- ", "")}
                </li>
              )
            }
            if (/^\d+\./.test(line)) {
              return (
                <li key={index} className={styles['proseLi']}>
                  {line.replace(/^\d+\.\s*/, "")}
                </li>
              )
            }
            return (
              <p key={index} className={styles['proseP']}>
                {line}
              </p>
            )
          })}
        </div>
      </div>
    </article>
  );
}


export default Article;
