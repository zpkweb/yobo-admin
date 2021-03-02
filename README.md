# 后台

### 安装

```bash
npm run install / yarn
```
### 开发

```bash
npm run dev / yarn dev
```

### 编译

```bash
npm run build / yarn build
```

### 部署

```bash
后台部署（监听端口: 3080， path: /admin）
创建yobo-admin目录，把文件解压到yobo-admin。
执行命令：pm2 start
```

### 目录

```bash
.
├── README.md
├── assets
│   ├── README.md
│   ├── css
│   │   ├── global.css
│   │   └── normalize.css
│   └── img
│       ├── login-bg.jpeg
│       └── logo.png
├── components
│   ├── README.md
│   ├── User.vue
│   ├── aside.vue
│   ├── chart.vue
│   ├── footer.vue
│   ├── header.vue
│   └── menu.vue
├── dist
├── ecosystem.config.js
├── lang
│   ├── en-US.js
│   ├── es-ES.js
│   ├── fr-FR.js
│   ├── ja-JP.js
│   └── zh-CN.js
├── layouts
│   ├── README.md
│   ├── default.vue
│   └── login.vue
├── middleware
│   └── README.md
├── nuxt.config.js
├── package.json
├── pages
│   ├── auth
│   │   ├── _type.vue
│   │   └── identityList.vue
│   ├── auth.vue
│   ├── commodity
│   │   ├── create.vue
│   │   ├── index.vue
│   │   └── options
│   │       └── _type.vue
│   ├── commodity.vue
│   ├── index.vue
│   ├── login
│   │   └── index.vue
│   ├── page
│   │   └── banner.vue
│   ├── page.vue
│   ├── user
│   │   ├── _identity
│   │   │   ├── create.vue
│   │   │   └── index.vue
│   │   ├── index.vue
│   │   └── seller
│   │       ├── apply.vue
│   │       ├── applyList.vue
│   │       ├── create.vue
│   │       └── index.vue
│   └── user.vue
├── plugins
│   ├── README.md
│   ├── axios.js
│   └── element-ui.js
├── static
│   ├── README.md
│   └── favicon.ico
├── store
│   ├── README.md
│   └── index.js
├── tree.md
├── tsconfig.json
├── types
│   └── vue-shim.d.ts
```
