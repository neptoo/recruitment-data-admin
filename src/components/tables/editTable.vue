<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="岗位名" v-model.trim="stitle" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getList">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" highlight-current-row style="width: 100%;">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" width="60">
      </el-table-column>
      <!--  120 100 100 120 180 -->
      <el-table-column prop="title" label="岗位名称" width="120">
      </el-table-column>
      <el-table-column prop="money" label="薪资待遇" width="100" sortable>
      </el-table-column>
      <el-table-column prop="exp" label="经验要求" width="100" sortable>
      </el-table-column>
      <el-table-column prop="degree" label="学历要求" width="100">
      </el-table-column>
      <el-table-column prop="addr" label="备注" width="90">
      </el-table-column>
      <el-table-column prop="time" label="发布时间" min-width="120" sortable>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <!-- <el-button type="danger" @click="handleDel(scope.$index)">批量删除</el-button> -->
      <el-pagination layout="prev, pager, next" :total="total" style="float:right;" @current-change="current_change" background>
      </el-pagination>
    </el-col>
    <!--编辑界面-->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" @click="dialogFormVisible=false">
      <el-form label-width="80px" :model="editForm">
        <el-form-item label="岗位名称" prop="title">
          <el-input v-model="editForm.title" placeholder="请输入岗位名"></el-input>
        </el-form-item>
        <el-form-item label="薪资待遇" prop="money">
          <el-input placeholder="请输入薪资" v-model="editForm.money" min="0" max="200" type="number">
            <template slot="append">k</template>
          </el-input>
        </el-form-item>
        <el-form-item label="所在城市" prop="site">
          <el-input placeholder="请输入工作地点" v-model="editForm.site">
          </el-input>
        </el-form-item>
        <el-form-item label="经验学历">
          <el-select v-model="editForm.exp" placeholder="请选择经验要求">
            <el-option v-for="option in options2" :value="option.text" :key="option.value">
              {{ option.text }}
            </el-option>
          </el-select>
          <el-select v-model="editForm.degree" placeholder="请选择学历要求">
            <el-option v-for="option in options1" :value="option.text" :key="option.value">
              {{ option.text }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.time" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="职位描述">
          <el-input type="textarea" v-model="editForm.addr" placeholder="请输入职位描述"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="addList">添加</el-button>
        <el-button v-else type="primary" @click="updateList">修改</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'editTable',
  data() {
    return {
      list: [],
      title: '',
      stitle: '',
      dialogStatus: "",
      dialogFormVisible: false,
      currentPage: 1,
      pagesize: 10,
      total: 0,
      textMap: {
        update: "更新",
        create: "新增"
      },
      time: "",
      addr: "",
      degree: '',
      exp: '',
      money: 0,
      site: '',
      options1: [
        { text: '学历不限', value: '0' },
        { text: '大专', value: '1' },
        { text: '本科', value: '2' },
        { text: '硕士', value: '3' },
        { text: '博士', value: '4' }
      ],
      options2: [
        { text: '经验不限', value: '0' },
        { text: '1-3年', value: '1' },
        { text: '3-5年', value: '2' },
        { text: '5-10年', value: '3' },
        { text: '10年以上', value: '4' }
      ],
      //编辑界面数据
      editForm: {
        title: '',
        time: "",
        addr: "",
        degree: '',
        exp: '',
        money: 0,
        site: ''
      },
    }
  },
  mounted: function() {
    axios.get('api/hire/getAllList').then(response => {
      this.list = response.data
      this.total = response.data.length
    }).catch(function(error) {
      console.log(error)
    })

  },
  methods: {
    getAll() {
      axios.get('api/hire/getAllList').then(response => {
        this.list = response.data
        this.total = response.data.length
      }).catch(function(error) {
        console.log(error)
      })
    },
    handleAdd: function() {
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      // 新增时清空
      this.editForm = {
        title: '',
        time: "",
        addr: "",
        degree: '',
        exp: '',
        money: 0,
        site: ''
      }
    },
    // 添加信息
    addList() {
      var title = this.editForm.title
      var money = this.editForm.money
      var degree = this.editForm.degree
      var exp = this.editForm.exp
      var site = this.editForm.site
      var time = this.editForm.time
      var addr = this.editForm.addr
      axios.post('/api/hire/addList', {
        title: title,
        money: money,
        degree: degree,
        exp: exp,
        site: site,
        time: time,
        addr: addr
      }).then(function(response) {
        alert('成功录入' + title + '')
        this.dialogFormVisible = false
      }).catch(function(error) {
        console.log(error)
      })

    },
    // 显示编辑页面
    handleEdit: function(index, row) {
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.editForm = Object.assign({}, row);
      // var hire_id = this.editForm.hire_id
      // console.log(index,row,hire_id)
    },
    // 假删除
    handleDel(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      }).then(() => {
        this.list.splice(index, 1)
        this.$message.success('删除成功')
      })

    },
    // 删除?
    // handelDel() {
    //     var hire_id = this.editForm.hire_id
    //     axios.post('/api/hire/delList', {
    //         hire_id: hire_id
    //     }).then(function (response) {
    //         console.log(response)
    //         alert('成功删除')
    //     }).catch(function (error) {
    //         console.log(error)
    //     })
    // },

    // 查询
    getList() {
      var title = this.stitle
      axios.get('api/hire/searchList', {
        params: {
          title: title
        }
      }).then(response => {
        this.list = response.data
        this.total = response.data.length
        if (title == '') {
          // 清空，重置数据表
          this.getAll()
        }
        if (response.data == -1) {
          // 不存在该岗位名
          return ''
        }
      }).catch(function(error) {
        console.log(error)
      })

    },
    // 翻页
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    // 更改
    updateList() {
      var title = this.editForm.title
      var hire_id = this.editForm.hire_id
      axios.post('/api/hire/updateList', {
        title: title,
        hire_id: hire_id
      }).then(function(response) {
        alert('成功更新' + title + '')
        this.dialogFormVisible = false
      }).catch(function(error) {
        console.log(error)
      })
    }
  }
}

</script>
<style scoped>
.toolbar {
  margin-top: 5px;
}

</style>
