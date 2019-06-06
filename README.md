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
服务端文件结构
|-- server
  |-- api				// 与数据库的各个表连接接口
    |-- userApi.js
    |-- hireApi.js
  |-- db.js					// mysql数据库连接配置
  |-- index.js				// Express服务器入口文件
  |-- sqlMap.js

前端文件结构
|-- src
  |-- assets
  |-- components
    |-- common						// hearder sidebar等公共组件
	|-- page						// Dahboard等主要路由模块
	|-- charts						// 可视化图表
	|-- Login.vue						// 登录模块


## 项目截图
### 首页（DashBoard）
![hireAdmin](http://7xjyw1.com1.z0.glb.clouddn.com/jspangadmin01.png)
### 基本图表（charts）
![hireAdmin](http://7xjyw1.com1.z0.glb.clouddn.com/jspangadmin02.png)
### 表格（Tables）
![hireAdmin](http://7xjyw1.com1.z0.glb.clouddn.com/jspangadmin04.png)
### MarkDown编辑和解析（MarkDown）
![hireAdmin](http://7xjyw1.com1.z0.glb.clouddn.com/jspangadmin05.png)
### 任务表单（To Do List）
![hireAdmin](http://7xjyw1.com1.z0.glb.clouddn.com/jspangadmin06.png)
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
