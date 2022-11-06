import styles from './Title.module.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Title = () => {
  return (
    <div>
        <body>
          <div className={styles.wrapper}>
            <h1>aduit</h1>
            <h2>action detector using inferred tiling</h2>
            <ArrowDropDownIcon fontSize='large' color='secondary' />
          </div>
        </body>
    </div>
  );
};

export default Title;