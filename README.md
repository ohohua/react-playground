## 项目结构说明

本项目基于 `@umijs/max`，主要文件和目录如下（可参考 `package.json` 中的依赖和脚本）：

- `src/`：项目源码目录，页面、组件等均在此目录下。
- `package.json`：项目依赖、脚本命令、作者信息等配置。
- `.umirc.ts`：Umi 配置文件，包含路由、插件、构建等相关配置。
- `.stylelintrc.js`：样式规范配置，集成了 Umi 推荐的 stylelint 规则。
- `.gitignore`：git 忽略文件配置。
- `README.md`：项目说明文档（即本文件）。

## 常用脚本

在 `package.json` 中定义了以下常用脚本：

- `dev`：本地开发启动（`max dev`）
- `build`：项目打包构建（`max build`）
- `format`：使用 Prettier 格式化代码
- `start`：启动开发环境（等同于 `dev`）
- `setup`/`postinstall`：依赖安装后自动执行 Umi 的初始化设置

## 依赖说明

- 主要依赖：`@umijs/max`、`antd`、`@ant-design/pro-components` 等
- 开发依赖：`husky`、`lint-staged`、`prettier`、`tailwindcss`、`typescript` 等

## 参考链接

- [Umi Max 官方文档](https://umijs.org/docs/max/introduce)
- [Ant Design 组件库](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/)
