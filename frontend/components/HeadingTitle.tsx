import styles from "../styles/component/HeadingTitle.module.scss";

type Props = {
    description: string;
    faq?: boolean;
}

const HeadingTitle = ({ description, faq }: Props): JSX.Element => {
  return (

    <div className={faq ? `${styles.base} ${styles.faq}` : styles.base}>
      <h1>{description}</h1>
    </div>
  )
}

export default HeadingTitle