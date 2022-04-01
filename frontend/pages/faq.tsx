import { NextPage } from "next"
import { GetStaticProps } from 'next'

import { Faqs } from "../interfaces"

import HeaderLayout from "../components/HeaderLayout"
import MenuAndFooter from "../components/MenuAndFooter"
import HeadingTitle from "../components/HeadingTitle"
import FaqItem from "../components/FaqItem"

import { TransitionGroup } from "react-transition-group";

import styles from "../styles/component/Faq.module.scss"

type Props = {
    faqs: Faqs[];
}

const FaqSection: NextPage<Props> = ({ faqs }): JSX.Element => {

  const renderList = (): JSX.Element => {
    return (
      <TransitionGroup>
        {faqs.map((faq, index) => {
          return (
            <FaqItem key={index} faqName={faq.attributes.faqName} faqDescription = {faq.attributes.faqDescription}/>
          )
        })}
      </TransitionGroup>
    ) 
  }

  return (
    <div>
      <HeaderLayout title="Frequently Asked Questions | Stand For Trees" />      
      <MenuAndFooter>
        <div className={styles.faqWrapper}>
          <section className={styles.faqHero} />
          <section className={styles.faqFaqContainer}>
            <HeadingTitle description="Frequently Asked Questions" faq/>
            <ul className={styles.faqListContainer}>
              {renderList()}
            </ul>
            <p className={styles.faqFinalParagraph}>If you have any further questions, please contact us at 
              <a href="mailto:info@standfortrees.org"> info@standfortrees.org.</a>
            </p>
          </section>
        </div>
      </MenuAndFooter>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

try {
  
  const result: Response = await fetch("http://localhost:1337/api/posts?fields=faqName, faqDescription");
  const resultObject = await result.json();

  console.log("posts variable:")
  console.log(resultObject);

  let faqs: Faqs[] = resultObject.data

  faqs = faqs.map((faq, index) => {
    const previous: string = faq.attributes.faqDescription;
    const stringSanatized: string = (previous.replace(/\[(.+?)\]\((https?:\/\/[a-zA-Z0-9/.(]+?)\)/g, '<a href="$2">$1</a>'));
    console.log(stringSanatized)

    const idx: number = index + 1;

    return {
      id: idx,
      attributes: {
        faqName: faq.attributes.faqName,
        faqDescription: stringSanatized,
      }

    }
  })

  return { props: { faqs } }


} catch (err) {
  console.log(err)
}


}

export default FaqSection