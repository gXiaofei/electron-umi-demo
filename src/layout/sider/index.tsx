import * as Icon from '@ant-design/icons';
import { history, useLocation, useModel } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Divider, Menu } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import routes, { routeType } from '../../../config/routes';
import styles from './index.less';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const getItemProps = (renderMenu: routeType[]): MenuItem[] => {
    if (Array.isArray(renderMenu) && renderMenu.length) {
        return renderMenu.map((item: routeType) => {
            /** 根据提供的string icon 创建icon图标 */
            if (typeof item.icon === 'string') {
                //@ts-ignore
                item.icon = React.createElement(Icon[item.icon]);
            }

            /** 暂时支持两层菜单 */
            if (Array.isArray(item.routes)) {
                const childrenRoute = item.routes.map((item: routeType) =>
                    getItem(item.name, item.path, item.icon),
                );
                return getItem(item.name, item.path, item.icon, childrenRoute);
            }

            return getItem(item.name, item.path, item.icon);
        });
    }
    return [];
};

type IProps = {
    collapsed: boolean;
};

const Sider: React.FC<IProps> = ({ collapsed }) => {
    const { initialState } = useModel('@@initialState');
    const [selectedKeys, setSelectedKeys] = useState<string>('');
    const { pathname } = useLocation();

    useEffect(() => {
        setSelectedKeys(pathname);
    }, [pathname]);

    /** TODO:暂时获取layout下的路由来展示菜单，后续有需求可修改逻辑 */
    const renderMenus = useMemo(() => {
        let menus = routes
            .find((item) => item.component === '@/layout/layout')
            ?.routes?.filter(
                (item) => !item.hideInMenu && item.menuRender !== false,
            );
        const renderMenuHeader: routeType[] = [];
        const renderMenuBottom: routeType[] = [];
        menus?.forEach((item) => {
            if (item.showInMenuBottom) {
                renderMenuBottom.push(item);
            } else {
                renderMenuHeader.push(item);
            }
        });
        return [renderMenuHeader, renderMenuBottom];
    }, []);

    const items1 = useMemo(() => getItemProps(renderMenus[0] || []), []);
    const items2 = useMemo(() => getItemProps(renderMenus[1] || []), []);

    const handleClick: MenuProps['onClick'] = (event) => {
        history.push(event.key);
    };

    return (
        <div
            className={styles.sider}
            style={{ width: collapsed ? '66px' : '200px' }}
        >
            <Menu
                theme={initialState?.theme}
                onClick={handleClick}
                selectedKeys={[selectedKeys]}
                inlineCollapsed={collapsed}
                mode="inline"
                items={items1}
            />
            <Divider />
            <Menu
                theme={initialState?.theme}
                onClick={handleClick}
                selectedKeys={[selectedKeys]}
                inlineCollapsed={collapsed}
                mode="inline"
                items={items2}
            />
        </div>
    );
};

export default Sider;
