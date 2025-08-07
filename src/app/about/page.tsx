import Link from 'next/link';
import styles from './styles.module.css';
import Widget from '@Components/Widget';


function AboutPage() {
  return (
    <section className={styles['about']}>
      <div className={styles['container']}>
        <div className={styles['grid']}>

          {/* Author Info */}
          <div className={styles['main']}>
            <div className={styles['authorIntro']}>
              <div className={styles['operator']}>
                <div className={styles['operatorIcon']}></div>
                <span className={styles['operatorName']}>SYSTEM.OPERATOR</span>
              </div>
              <h2 className={styles['title']}>ABOUT.ME</h2>
              <div className={styles['titleUnderline']}></div>
            </div>

            <div className={styles['description']}>
              <p className={styles['paragraph']}>
                Hello! I'm a passionate full-stack developer with a love for creating beautiful and functional web applications. My journey in tech has been driven by a desire to solve complex problems and build amazing things.
              </p>
              <p className={styles['paragraph']}>
                This project is a brutalist-inspired personal portfolio and blog, built with Next.js, TypeScript, and CSS modules. The design is intentionally raw, focusing on content and functionality over ornamentation.
              </p>
              <p className={styles['paragraphSecondary']}>
                I believe in the power of open-source and continuous learning. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>

              <div className={styles['buttons']}>
                <Link href="/blog" className={styles['buttonRepo']}>
                  [VIEW.BLOG]
                </Link>
              </div>
            </div>
          </div>

          {/* System Stats */}
          <div className={styles['sidebar']}>
            <Widget title="CONTACT.INFO">
              <div className={styles['stat']}>
                <span>EMAIL:</span>
                <span className="font-bold">SYSTEM.EMAIL</span>
              </div>
              <div className={styles['stat']}>
                <span>GITHUB:</span>
                <span className="font-bold">SYSTEM.GITHUB</span>
              </div>
              <div className={styles['stat']}>
                <span>LINKEDIN:</span>
                <span className="font-bold">SYSTEM.LINKEDIN</span>
              </div>
            </Widget>

            <Widget title="CURRENT.PROJECT">
              <div className={styles['widgetContent']}>
                <p>This portfolio is an ongoing project. I'm constantly adding new features and improving the existing codebase. Check out the repository to see the latest updates.</p>
                <div className={styles['buttons']}>
                  <Link href="#" className={styles['buttonRepo']}>
                    [VIEW.REPO]
                  </Link>
                </div>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </section>
  );
}


export default AboutPage;
