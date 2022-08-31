import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';
import theme from './theme';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    hash: true,
    history: {
        type: 'hash',
    },
    publicPath: isProd ? './' : '/',
    outputPath: './release/app/dist/renderer',
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    ignoreMomentLocale: true,
    manifest: {
        basePath: '/',
    },
    // Fast Refresh 热更新
    fastRefresh: true,
    routes,
    theme,
    proxy: proxy['dev'],
    npmClient: 'yarn',
});
