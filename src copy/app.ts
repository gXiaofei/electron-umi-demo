// 运行时配置
import icon from '@/assets/icon.png';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

interface currentUserType {
    avatar: string;
    name: string;
}

export type initialStateType = {
    currentUser: currentUserType;
    theme: 'light' | 'dark';
};

export async function getInitialState(): Promise<initialStateType> {
    return {
        theme: 'light',
        currentUser: {
            avatar: icon,
            name: '张三',
        },
    };
}

// export const layout = () => {
//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     menu: {
//       locale: false,
//     },
//   };
// };

export function onRouteChange({ location, clientRoutes, routes, action }) {
    console.log({ location, clientRoutes, routes, action });
}
