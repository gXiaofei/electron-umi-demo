import styles from './index.less';
import LeftContent from './leftContent';
import RightContent from './rightContent';

const Header = () => {
    return (
        <div className={styles.header}>
            <LeftContent />
            <div style={{ flex: 1 }}></div>
            <RightContent />
        </div>
    );
};

export default Header;
