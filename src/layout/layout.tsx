import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useState } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { Outlet } from 'umi';
import Header from './header';
import styles from './layout.less';
import Sider from './sider';

const themes = {
    dark: 'styles/dark-theme.css',
    light: 'styles/light-theme.css',
};
export default () => {
    const { initialState } = useModel('@@initialState');
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={initialState?.theme}
        >
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <Sider collapsed={collapsed} />
                    <div className={styles.pageContainer}>
                        <Button
                            type="primary"
                            className={styles.collapsedBtn}
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? <RightOutlined /> : <LeftOutlined />}
                        </Button>
                        <Outlet />
                    </div>
                </div>
            </div>
        </ThemeSwitcherProvider>
    );
};
