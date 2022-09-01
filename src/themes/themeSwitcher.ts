import cssVars, { CSSVarsPonyfillOptions } from 'css-vars-ponyfill';
import themeMap from './theme';

const switcherTheme = ({
    watch = true,
    variables,
    onlyLegacy = true,
}: CSSVarsPonyfillOptions) => {
    cssVars({
        watch,
        variables,
        onlyLegacy,
    });
};

const initTheme = () => {
    cssVars({
        watch: true,
        variables: themeMap.light,
        onlyLegacy: true,
    });
};

export { initTheme, switcherTheme };
