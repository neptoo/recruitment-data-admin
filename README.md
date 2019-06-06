# 招聘数据管理系统

## 简介
> 一个建立在Vue2.0框架基础上的数据管理系统，本系统采用爬取的招聘网站数据进行分析

前端: `Vue.js`, `Element-ui`, `ECharts`
后端: `Express`
数据库: `MySQL`

## 功能

```
- 注册 / 登录 / 注销

- 表格
  - 增删改查

- 可视化数据展示
  - 饼图
  - 直方图
  - 雷达图
  - 中国地图

- 待办事项
  - TodoList

- 编辑器
  - Markdown

- Excel
  - Excel上传

- 错误页面
  - 404

```

## 目录

服务端
```
|-- server

  |-- api    // 与数据库的各个表连接接口

    |-- userApi.js

    |-- hireApi.js

  |-- db.js     // mysql数据库连接配置

  |-- index.js    // Express服务器入口文件

  |-- sqlMap.js
```

前端
```
|-- src

  |-- components

  |-- common      // hearder sidebar等公共组件

  |-- page      // Dahboard等主要路由模块

  |-- charts      // 可视化图表

  |-- Login.vue      // 登录模块
```

## 项目截图
### 首页（DashBoard）
![hireAdmin](https://raw.githubusercontent.com/neptoo/recruitment-data-admin/master/static/views/1.png)
### 基本图表（charts）
![hireAdmin](https://raw.githubusercontent.com/neptoo/recruitment-data-admin/master/static/views/2.png)
![hireAdmin](https://raw.githubusercontent.com/neptoo/recruitment-data-admin/master/static/views/3.png)
### 增删改查
![hireAdmin](https://raw.githubusercontent.com/neptoo/recruitment-data-admin/master/static/views/4.png)
### Markdown
![hireAdmin](https://raw.githubusercontent.com/neptoo/recruitment-data-admin/master/static/views/5.png)

## 项目运行
``` bash
# 安装依赖
npm install

# 服务器端
cd server
node index

# 项目根目录
npm run dev

```
