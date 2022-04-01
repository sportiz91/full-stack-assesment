import { NextPage } from "next";
import { useState } from "react";

import { CSSTransition } from "react-transition-group";

import styles from "../styles/component/FaqItem.module.scss";

type Props = {
    faqName: string;
    faqDescription: string;
}

const FaqItem: NextPage<Props> = ({ faqName, faqDescription }): JSX.Element => {

  const [show, setShow] = useState<boolean>(false)

  const handleClick = (): void => {
    setShow(!show);
  }

  return (
      <div className={styles.faqListItemWrapper}>
        <li className={show ? `${styles.faqListItem} ${styles.open}` : styles.faqListItem} onClick={handleClick}>
          <p>{faqName}</p>
          <i className={styles.circePlusMinus} />
        </li>
  
 
        <CSSTransition classNames={{
            enter: styles.descriptionEnter,
            enterActive: styles.descriptionEnterActive,
            exit: styles.descriptionExit,
            exitActive: styles.descriptionExitActive
          }} timeout={200} in={show} unmountOnExit>
          <div className={styles.faqListDescription}>
            <p>{faqDescription}</p>
          </div>
        </CSSTransition>
  
        

      </div>

  )
}

export default FaqItem