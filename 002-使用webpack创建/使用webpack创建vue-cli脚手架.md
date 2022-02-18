# 使用webpack创建vue-cli脚手架

- 安装vue-cli  
  `npm install -g @vue/cli`
- 首次生成模板并创建项目`vue3`  
  `vue create vue3`
  - 提示是否使用淘宝镜像
  - 选择`Y`，是
  ```txt
  ? Your connection to the default npm registry seems to be slow.
    Use https://registry.npm.taobao.org for faster installation? (Y/n)
  ```
  - 提示选择模板
  - 选择`Manually select features`，创建一个新的
  ```txt
    Vue CLI v4.5.15
  ? Please pick a preset: (Use arrow keys)
  > Default ([Vue 2] babel, eslint)
    Default (Vue 3) ([Vue 3] babel, eslint)
    Manually select features
  ```
  - 提示选择插件，按`空格`选择或取消，按`a`全选，按`i`反选，按`回车`确定
  - 选择`Choose Vue version`、`Router`和`Vuex`，选择vue版本，路由和vuex
  ```txt
  ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
  >(*) Choose Vue version
   (*) Babel
   ( ) TypeScript
   ( ) Progressive Web App (PWA) Support
   ( ) Router
   ( ) Vuex
   ( ) CSS Pre-processors
   (*) Linter / Formatter
   ( ) Unit Testing
   ( ) E2E Testing
  ```
  - 选择vue版本
  - 选择`3.x`，vue3版本
  ```txt
  ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
  > 2.x
    3.x
  ```
  - 路由模式是否设置成history
  - 选择`Y`，是
  ```txt
  ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
  ```
  - 配置文件储存方式
  - 选择`In dedicated config files`，放到独自的配置文件
  ```txt
  ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
  > In dedicated config files
    In package.json
  ```
  - 是否单独保存这个配置
  - 选择`Y`，是
  ```txt
  ? Save this as a preset for future projects? (y/N)
  ```
  - 输入保存的名字
  - 输入`vue3`
  ```txt
  ? Save preset as:
  ```
- 下次创建项目时，会提示如下，选择`vue3`即可
```txt
  Vue CLI v4.5.15
? Please pick a preset: (Use arrow keys)
> vue3 ([Vue 3] router, vuex)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
  Manually select features
```
- 升级vue版本
`vue upgrade --next`
