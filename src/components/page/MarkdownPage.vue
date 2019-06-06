<template>
  <div class="components-container">
    <v-pageTitle vtitle="Markdown"></v-pageTitle>

    <mavon-editor  style="  margin-top: 50px" v-model="content"/>
  </div>
</template>
<script>
 import  { mavonEditor } from 'mavon-editor';
 import 'mavon-editor/dist/css/index.css';
 import vPageTitle from '../common/pageTitle.vue';
    
export default {
  components: { vPageTitle,mavonEditor },
  data() {
    return {
      content: `Markdown  个人简历
=============
> [语法详解](http://commonmark.org/help/)
## 联系方式

- 手机：15071268023
- Email：Elaine.wuqi@foxmail.com 
- QQ号：2385063795

## 个人信息

 - 吴琪/女/1996
 - 本科/武汉纺织大学信管专业 
 - Github：[@neptoo](http://github.com/neptoo) 
 - 技术博客：https://neptoo.github.io

 - 期望职位：前端工程师
 - 期望薪资：税前月薪10k~15k，特别喜欢的公司可例外
 - 期望城市：北京

## 技能清单
\`\`\`
以下均为我熟练使用的技能
- Web开发：HTML5/CSS3/ES6
- 前端框架：Vue/Bootstrap/微信小程序
- 前端工具：SaSS/Stylus
- 数据库相关：MySQL/SQL
- 版本管理、文档和自动化部署工具：Git
\`\`\`
`
    }
  }
}
</script>

<style scoped>
.v-note-wrapper{
  z-index:1 !important;
}
</style>