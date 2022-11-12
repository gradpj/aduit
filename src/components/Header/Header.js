import styles from './Header.module.css'
import Logo from '../../assets/logo/white_logo1.jpg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div className={styles.logo}>
                    <img src={Logo} alt="aduit" width="160px"></img>
                </div>
            </div>
        </header>
    )
}

export default Header