import Link from 'next/link';
import styles from './styles.module.css';
import Widget from '@Components/Widget';


function HomePage() {
  return (
    <section className={styles['home']}>
      <div className={styles['container']}>
        <div className={styles['grid']}>

          {/* Author Info */}
          <div className={styles['main']}>
            <div className={styles['authorIntro']}>
              <div className={styles['operator']}>
                <div className={styles['operatorIcon']}></div>
                <span className={styles['operatorName']}>SYSTEM.OPERATOR</span>
              </div>
              <h2 className={styles['title']}>APP.DEV</h2>
              <div className={styles['titleUnderline']}></div>
            </div>

            <div className={styles['description']}>
              <p className={styles['paragraph']}>
              <span className={styles['span-0']}>AI INTEGRATOR. UI TO CLOUD. PROTOTYPE TO PRODUCTION. </span>
              <span className={styles['span-1']}>DESIGN, BUILD, RUN. </span>
              <span className={styles['span-0']}>PRODUCT-MINDED. TECH ARCHITECT. TEAM-FIRST. MENTOR.</span>
              </p>

              <p className={styles['paragraphSecondary']}>
                <span className={styles['span-1']}>SPECIALIZING IN FULL-STACK AI:&nbsp;</span>
                <span className={styles['span-3']}>UI • API • DATA • DEVOPS</span>
                <span className={styles['span-4']}>FROM SPEC TO SCALE.&nbsp;
                  <span className={styles['span-2']}>AUTOMATE. </span>
                  <span className={styles['span-2']}>OBSERVE. </span>
                  <span className={styles['span-2']}>OPTIMIZE.</span>
                </span>
              </p>

              <div className={styles['buttons']}>
                <Link href="#" className={styles['buttonRepo']}>
                  [VIEW.REPO]
                </Link>
              </div>
            </div>
          </div>

          {/* System Stats */}
          <div className={styles['sidebar']}>
            <Widget title="OPERATOR.STATS">
              <div className={styles['stat']}>
                <span>PROJECTS.COMPLETED:</span>
                <span className="font-bold">127</span>
              </div>
              <div className={styles['stat']}>
                <span>YEARS.ACTIVE:</span>
                <span className="font-bold">11</span>
              </div>
              <div className={styles['stat']}>
                <span>LINES.OF.CODE:</span>
                <span className="font-bold">2.3M</span>
              </div>
              <div className={styles['stat']}>
                <span>COFFEE.CONSUMED:</span>
                <span className="font-bold">∞</span>
              </div>
            </Widget>

            <Widget title="TECH.STACK">
              <div className={styles['techStackGrid']}>
                {['TYPESCRIPT', 'REACT', 'NEXT.JS', 'NODE.JS', 'POSTGRESQL', 'CONTAINERIZATION', 'KUBERNETES', 'GITOPS'].map((tech) => (
                  <div key={tech} className={styles['techStackItem']}>
                    {tech}
                  </div>
                ))}
              </div>
            </Widget>

            <Widget title="CURRENT.STATUS">
              <div className={`${styles['widgetContent']} ${styles['statusWidgetContent']}`}>
                <div className={styles['statusItem']}>
                  <div className={styles['statusIndicatorOnline']}></div>
                  AVAILABLE.FOR.WORK
                </div>
                <div>LOCATION: CYBER.REALM</div>
                <div>TIMEZONE: UTC+00</div>
                <div>RESPONSE.TIME: {"<"} 24H</div>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </section>
  );
}


export default HomePage;
