export type routeType = {
    path?: string;
    exact?: boolean;
    component?: string;
    name?: string;
    routes?: routeType[];
    icon?: string;
    menuRender?: boolean;
    hideInMenu?: boolean;
};

export type locationType = {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: string | null;
};
