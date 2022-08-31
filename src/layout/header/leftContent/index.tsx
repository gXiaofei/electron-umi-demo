import logo from '@/assets/logoTitle.png';
import styles from './index.less';

const RightContent = () => {
    return (
        <div className={styles.leftContent}>
            <img className={styles.logo} src={logo} alt="logo" />
        </div>
    );
};

export default RightContent;
