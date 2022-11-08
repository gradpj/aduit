import styles from './Title.module.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { IconButton } from '@material-ui/core';

const Title = () => {
  return (
        <div className={styles.titleBody}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.titleH1}>aduit</h1>
            <h2 className={styles.titleH2}>action detector using inferred tiling</h2>
            <IconButton>
              <ArrowDropDownIcon style={{ fontSize : '100', color : '#CACACA'}} />
            </IconButton>
          </div>
        </div>
  );
};

export default Title;