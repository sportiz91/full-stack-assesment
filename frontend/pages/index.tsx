import React from "react"
import Link from "next/link"
import styles from "../styles/component/Home.module.scss";

import { FiGithub, FiTwitter } from "react-icons/fi"


const HomePage: React.FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeLayout}>
        <div className={styles.headingBg}>
          <h1>Meta-Carbon Coding Challenge</h1>
        </div>

        <div className={styles.homeInfo}>
          <div className={styles.homeInfoRow}>
            <p>Coder: Santiago Pablo Ortiz</p>
            <div>          
              <img src="/images/me1.jpg" alt="author-picture" />
            </div>

          </div>

          <div className={styles.homeInfoRow}>
            <p>Reach me out</p>
            <div>
              <a href="https://www.github.com/sportiz91/"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <FiGithub size={"2.1rem"} />
              </a>

              <a href="https://www.twitter.com/sportiz91/"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <FiTwitter size={"2.1rem"} />
              </a>    
            </div>
          </div>
        </div>


          <Link href="/faq" >
            <div className={styles.homeAnchorButton}>
              <a>Go to the FAQ Section</a>
            </div>
            
          </Link>


      </div>
    </div>
  )
}

export default HomePage


