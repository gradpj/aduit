import watch from "../../assets/images/watch.jpg";
import styles from './Title.module.css';

const Title = () => {
  return (
    <figure className={styles.figure}>
      <img src={watch} alt="Background_img"/>
      <article className={styles.article}>
          <h1>Aduit</h1>
          <h2>Action Detector Using Inferred Tiling</h2>
      </article>
    </figure>
  );
};

export default Title;