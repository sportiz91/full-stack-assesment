import { NextPage } from "next"
import HeaderLayout from "../components/HeaderLayout"
import MenuAndFooter from "../components/MenuAndFooter"

import HeadingTitle from "../components/HeadingTitle"

import styles from "../styles/component/Faq.module.scss"

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

const FaqSection: NextPage = (): JSX.Element => {
  return (
    <div>

      <HeaderLayout title="Frequently Asked Questions | Stand For Trees" />
        
      <MenuAndFooter>
        <div className={styles.faqWrapper}>

          <section className={styles.faqHero}>

          </section>

          <section className={styles.faqFaqContainer}>

            <HeadingTitle description="Frequently Asked Questions" faq/>

            <ul className={styles.faqListContainer}>
              <li className={styles.faqListItem}>
                <p>What is a certificate?</p>
                <i className={styles.circePlusMinus} />
              </li>
              <li className={styles.faqListItem}>
                <p>What is a ´tonne´?</p>
                <i className={styles.circePlusMinus} />
              </li>
              <li className={styles.faqListItem}>
                <p>What makes this program so unique?</p>
                <i className={styles.circePlusMinus} />
              </li>
            </ul>
          </section>

        </div>
      </MenuAndFooter>
    </div>
  )
}

export default FaqSection