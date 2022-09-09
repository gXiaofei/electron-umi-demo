> time: 2022/9/9

## run start

1. `npm run start`

直接启动主进程和渲染进程

2. `npm run start:renderer`

单独启动渲染进程，默认端口`3355`

3. `npm run start:main`

单独启动主进程

4. `npm run start preload`

将 preload.ts 打包成 preload.js

## run build

1. `npm run build`

打包主进程和渲染进程

2. `npm run build:main`

打包主进程

3. `npm run build:renderer`

打包渲染进程

4. `npm run builder`

构建生成 electron 应用安装包

5. `npm run package`

打包主进程、渲染进程并且构建生成 electron 应用安装包

## 项目介绍

### 技术栈

该项目使用[umi](https://umijs.org/)+[Electron](https://www.electronjs.org/)+[antd](https://ant.design/index-cn)搭建

主要是[React](https://react.docschina.org/)+[Electron](https://www.electronjs.org/)+[Typescript](https://www.typescriptlang.org/)+[Node](https://nodejs.org/en/)...

使用 electron-builder 构建生成`window`、`macOS`安装程序（`Linux`暂时没人使用）

### 主要的一些路径

主进程在`src/main/*`,入口`src/main/main.ts`

主进程打包后的位置`release/app/dist/main`

渲染进程打包后的位置`release/app/dist/renderer`

构建成安装程序位置`release/build`

### 开发

1. 拉取仓库代码
2. 安装依赖 `yarn`

提示`Electron failed to install correctly, please delete node_modules/electron and try installing again;`说明`electron`还没有安装成功，可以将`ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/`设置为 taobao 镜像

3. 启动项目

可以使用`npm run start:main`启动主进程，`npm run start:renderer`启动渲染进程, 或者直接`npm run start`会自动启动主进程和渲染进程

提示`Error: ENOENT: no such file or directory, open 'xxxxxxx/Ibp-ContractAssistant-Front/dll/preload.js'`, 需要先构建下`preload.ts`文件, 执行`npm run start:preload`, 会在项目根目录生成 `dll/preload.js`

### 打包

使用`npm run build`将会打包主进程和渲染进程到`release/app/dist`目录下，也可以使用`npm run build:main`单独打包主进程文件，或者`npm run build:renderer`单独打包渲染进程文件.

使用`npm run package`会先执行打包后在执行构建

### 构建

使用`npm run builder`执行构建

未完待续...
